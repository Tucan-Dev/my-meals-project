import React from "react";
import { FlatList, StyleSheet } from 'react-native';
import {
    Container,
    Items,
    Marker,
    ViewTitle,
    TitleItem,
    ContainerItem,
    Delete,
} from './styles';

import DeleteSvg from '../../assets/delete.svg'

interface MyItemListProps {
    items: {
       id: number;
       title: string;
       done: boolean;
    }[];
    
    onPress: (id: number) => void;
    onRemove: (id: number) => void;
}


export function MyItemList( { items, onPress, onRemove}: MyItemListProps){
   
    return(
       

        <Container>
            <FlatList
                data={items}
                keyExtractor={item => String(item.id)}
                renderItem={({ item, index}) => {
                    return (
                        <Items
                            style={styles.shadow}
                            done={item.done}
                        >
                            <ContainerItem
                                done={item.done}
                                onPress={() => onPress(item.id)} 
                            >
                                
                                <Marker
                                    done={item.done}
                                />
                                <ViewTitle>
                                    <TitleItem
                                        done={item.done}
                                    >
                                        {item.title}
                                    </TitleItem>
                                </ViewTitle>
                                
                            </ContainerItem>
                            <Delete
                                
                                activeOpacity={0.8}
                                onPress={() => onRemove(item.id)} 
                            >
                                <DeleteSvg
                                    width={14}
                                    height={18}
                                />
                            </Delete>

                        </Items>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#C4C4C4',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 1.5,
    }
}) 