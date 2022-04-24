import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { showMessage } from "react-native-flash-message";

import * as SP from  './styles';

import { Button, HeaderPages } from "../../components";
import { useMealStorage } from '../../hooks/meals';
import { ActivityIndicator, Alert } from "react-native";
import theme from "../../global/styles/theme";

interface InterfaceHourMeals {
    idMeal: string;
    inicio: string;
    termino: string;
}

export function Settings(){
    const navigation = useNavigation();

    const { saveSettingsHourMeals, hourMeal, isLoadHourMeal, loadStorageHourMeal } = useMealStorage();


    const [inputBreakfastPrimary, setInputBreakfastPrimary] = useState('');
    const [inputBreakfastSecondary, setInputBreakfastSecondary] = useState('');

    const [inputLunchPrimary, setInputLunchPrimary] = useState('');
    const [inputLunchSecondary, setInputLunchSecondary] = useState('');

    const [inputSnackPrimary, setInputSnackPrimary] = useState('');
    const [inputSnackSecondary, setInputSnackSecondary] = useState('');

    const [inputToDinnerPrimary, setInputToDinnerPrimary] = useState('');
    const [inputToDinnerSecondary, setInputToDinnerSecondary] = useState('');

    // const [hourMeal, setHourMeal] = useState<InterfaceHourMeals[]>([]);
    const [loading, setLoading] = useState(false);

    const [isWarning, setIsWarning] = useState(false);

    function handleAbout(){
        navigation.navigate("SobreSettings");
    }

    useEffect(() => {
        setIsWarning(false);
        loadStorageHourMeal();
    }, []);

    useEffect(() => {
        hourMeal.map((item, index) => {
           if(item.idMeal === 'Café'){
            setInputBreakfastPrimary(item.inicio)
            setInputBreakfastSecondary(item.termino)
           }
           if(item.idMeal === 'Almoço'){
            setInputLunchPrimary(item.inicio)
            setInputLunchSecondary(item.termino)
           }
           if(item.idMeal === 'Merenda da tarde'){
            setInputSnackPrimary(item.inicio)
            setInputSnackSecondary(item.termino)
           }
           if(item.idMeal === 'Janta'){
            setInputToDinnerPrimary(item.inicio)
            setInputToDinnerSecondary(item.termino)
           }
        })
    }, [hourMeal])
 
    async function handleSaveHourSettings(){
        setIsWarning(false);
        setLoading(true);
        
        const data = [
            {
                idMeal: 'Café',
                inicio: inputBreakfastPrimary,
                termino: inputBreakfastSecondary,
            },
            {
                idMeal: 'Almoço',
                inicio: inputLunchPrimary,
                termino: inputLunchSecondary,
            },
            {
                idMeal: 'Merenda da tarde',
                inicio: inputSnackPrimary,
                termino: inputSnackSecondary,
            },
            {
                idMeal: 'Janta',
                inicio: inputToDinnerPrimary,
                termino: inputToDinnerSecondary,
            }
        ];

        if(inputBreakfastPrimary == '' || inputBreakfastSecondary == '' || inputLunchPrimary == '' || inputLunchSecondary == '' || inputSnackPrimary == '' || inputSnackSecondary == '' || inputToDinnerPrimary == '' || inputToDinnerSecondary == ''){
            setIsWarning(true);
        }else{
            try {
                setIsWarning(false);
                await saveSettingsHourMeals(data);
                showMessage({
                    message: "",
                    description: "Configurações salvas com sucesso",
                    type: "success",
                    textStyle:{
                        textAlign: "center"
                    }
                  });
            } catch (error) {
                showMessage({
                    message: "",
                    description: "Erro ao salvar configurações",
                    type: "danger",
                    textStyle:{
                        textAlign: "center"
                    }
                  });
            }
           
        }
       setLoading(false);
    }
   
    return(
        <SP.Container>
           <HeaderPages title="Configurações de horários" handleAbout={handleAbout}/>
           <SP.Main showsVerticalScrollIndicator={false}>
               {
                   isLoadHourMeal ? <ActivityIndicator size="large" color={theme.colors.red} />
                   :
                   <>
                    <SP.TitleInput>Café da manhã</SP.TitleInput>
                    <SP.Content>
                        <SP.Input
                            placeholder="05:00"
                            onChangeText={setInputBreakfastPrimary}
                            value={inputBreakfastPrimary}
                            keyboardType="numeric"
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                        <SP.TextBetween>às</SP.TextBetween>
                        <SP.Input
                            placeholder="08:00"
                            onChangeText={setInputBreakfastSecondary}
                            value={inputBreakfastSecondary}
                            keyboardType="numeric"
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                    </SP.Content>
    
                    <SP.TitleInput>Almoço</SP.TitleInput>
                    <SP.Content>
                        <SP.Input
                            placeholder="11:00"
                            onChangeText={setInputLunchPrimary}
                            value={inputLunchPrimary}
                            maxLength={5}
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                        <SP.TextBetween>às</SP.TextBetween>
                        <SP.Input
                            placeholder="13:00"
                            onChangeText={setInputLunchSecondary}
                            value={inputLunchSecondary}
                            maxLength={5}
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                    </SP.Content>
    
                    <SP.TitleInput>Merenda da tarde</SP.TitleInput>
                    <SP.Content>
                        <SP.Input
                            placeholder="15:00"
                            onChangeText={setInputSnackPrimary}
                            value={inputSnackPrimary}
                            
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                        <SP.TextBetween>às</SP.TextBetween>
                        <SP.Input
                            placeholder="17:00"
                            onChangeText={setInputSnackSecondary}
                            value={inputSnackSecondary}
                        
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                    </SP.Content>
    
                    <SP.TitleInput>Janta</SP.TitleInput>
                    <SP.Content>
                        <SP.Input
                            placeholder="19:00"
                            onChangeText={setInputToDinnerPrimary}
                            value={inputToDinnerPrimary}
                        
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                        <SP.TextBetween>às</SP.TextBetween>
                        <SP.Input
                            placeholder="22:00"
                            onChangeText={setInputToDinnerSecondary}
                            value={inputToDinnerSecondary}
                            
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />
                    </SP.Content>
                    </>
                    
                }
                {
                    isWarning && 
                    <SP.TextWarning>Os campos não podem ser vázios</SP.TextWarning>
                }

                <SP.ContainerButton>
                    {
                        loading ? <ActivityIndicator color='#F77F00' size="large"/> :
                        <Button
                            title={hourMeal.length > 0 ? "Atualizar" : "Adicionar"}
                            onPress={handleSaveHourSettings}
                        />   
                    }
                    </SP.ContainerButton>
           </SP.Main>
            
        </SP.Container>
    );
}