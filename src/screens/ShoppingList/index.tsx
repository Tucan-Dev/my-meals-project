import React, { useState, useEffect} from "react";
import { Keyboard, Alert, ActivityIndicator, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";

import * as SP from './styles';
import theme from "../../global/styles/theme";

import  { HeaderPages,  InputPurchases, MyItemList, Menu} from "../../components";

import AvisoSvg from "../../assets/aviso.svg";

import { COLLECTION_SHOPPINGLIST } from '../../configs/database';

interface Item{
    id: number;
    title: string;
    done: boolean;
}

export function ShoppingList(){
    const navigation = useNavigation();    

    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
 
    async function handleAddItem(newItemTitle: string) {
      
        if(newItemTitle !== '') {
            const data = {
              id: new Date().getTime(),
              title: newItemTitle,
              done: false,
            }

            const storageData = [
                ...items,
                data
            ]
           
            setItems(storageData);
            await AsyncStorage.setItem(COLLECTION_SHOPPINGLIST, JSON.stringify(storageData));
          
        } else {
            // Alert.alert('O item não pode ser vazio');
            showMessage({
                message: "",
                description: "O item não pode ser vazio",
                type: "danger",
                textStyle:{
                    textAlign: "center"
                }
              });
        } 
       
        Keyboard.dismiss();
    }
 
    async function handleMarkItemAsDone(id: number) {
        
        let alter = [...items];
    
        items.map((alterItems, index) => {
          if(alterItems.id === id) {
            alter[index].done = !alterItems.done;
          }
        })
        
        setItems(alter);
      
        await AsyncStorage.setItem(COLLECTION_SHOPPINGLIST, JSON.stringify(alter));
        alter = [];
    }

    
    async function handleCleanListItems() {
        await AsyncStorage.removeItem(COLLECTION_SHOPPINGLIST);
        setItems([]);
    }
    
    async function handleRemoveItem(id: number) {
        const removeItem = items.filter(
            item => item.id !== id 
        )
       
        setItems(removeItem);
        await AsyncStorage.setItem(COLLECTION_SHOPPINGLIST, JSON.stringify(removeItem));
        
    }

    async function loadStorageData(){
        const storage = await AsyncStorage.getItem(COLLECTION_SHOPPINGLIST);

        if(storage){
            const data = JSON.parse(storage);

            setItems(data);
        }
        setLoading(false)
    }


    useEffect(() => {
        loadStorageData();
    }, []);

    function handleAbout(){
        navigation.navigate("SobreShoppingList");
    }

    return(
        <SP.Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="#003333"
                
            />
           
           <HeaderPages title="Lista de compras" handleAbout={handleAbout} />
           <SP.ContainerSecondary>
                <SP.Header>
                    <SP.TitleHeader>
                        Meus itens
                    </SP.TitleHeader>
                
                    
                        {
                            items.length > 4 && 
                            <SP.ButtonClean onPress={handleCleanListItems}>
                                <SP.TitleClean>Limpar lista</SP.TitleClean>
                            </SP.ButtonClean>
                        }
                    
                </SP.Header>
           
            
                {
                    keyboardStatus === false && items.length === 0 &&
                    <SP.ContainerAviso>
                        <AvisoSvg
                            width={111}
                            height={72}
                        />
                        <SP.TitleListaVazia>
                            Ops, você ainda não adicionou {"\n"}
                            itens a sua lista de compras!
                        </SP.TitleListaVazia>
                    </SP.ContainerAviso>
                }
          
            
                {
                    loading ? <ActivityIndicator size="large" color={theme.colors.red} />
                    :
                    <MyItemList
                        items={items}
                        onPress={handleMarkItemAsDone}
                        onRemove={handleRemoveItem}
                    />
                }

                <SP.ViewInput>
                    <InputPurchases
                        addItem={handleAddItem}
                    />
                </SP.ViewInput>

           </SP.ContainerSecondary>

        </SP.Container>
    );
}