import React, { useState, useEffect} from "react";
import { ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Container,
    Main,
    ContainerInput,
    Title,
    Input,
    MessageError,
    ContainerButton,
    ContainerLoadSave,
    TitleLoadSave
} from './styles';

import { HeaderPages } from "../../components/HeaderPages";
import { Button } from "../../components/Button";

import { useMealStorage } from '../../hooks/meals';

export function NewMeal(){
    const navigation = useNavigation();

    const { saveStorageMeals, isLoadNewMeal } = useMealStorage();

    const [selectedDayWeek, setSelectedDayWeek] = useState('Segunda-feira');
    const [selectedCategoryMeal, setSelectedCategoryMeal] = useState('Café');
    const [nameMeal, setNameMeal] = useState('');
    const [ingredients, setIngredients] = useState('');

    const [messageErrorName, setIMessagErrorName] = useState(false);
    const [messageErrorIngredients, setIMessagErrorIngredients] = useState(false);

    const CHAVE_SAVE_MEAL = '@mymeals:meal';

    const daysWeek = [
        { id: '1', day: 'Segunda-feira' },
        { id: '2', day: 'Terça-feira' },
        { id: '3', day: 'Quarta-feira' },
        { id: '4', day: 'Quinta-feira' },
        { id: '5', day: 'Sexta-feira' },
        { id: '6', day: 'Sábado' },
        { id: '7', day: 'Domingo' },
    ]

    const categoryMeal = [
        { id: '1', category: 'Café' },
        { id: '2', category: 'Almoço' },
        { id: '3', category: 'Merenda da tarde' },
        { id: '4', category: 'Janta' },
    ]

    function goHome(){
        navigation.goBack();
    }

    async function handleSaveMeal(){
        
        if(nameMeal === ''){
            setIMessagErrorName(true);
        }
        
        if(ingredients === ''){
            setIMessagErrorIngredients(true);
        }

        
        if(nameMeal != '' && ingredients != ''){
            const dataSave = {
                nameMeal,
                ingredients,
                selectedDayWeek,
                selectedCategoryMeal
            }

            saveStorageMeals(dataSave);

            navigation.goBack();

        }
        
    }

    useEffect(() => {
        if(nameMeal != ''){
            setIMessagErrorName(false);
        }

        if(ingredients != ''){
            setIMessagErrorIngredients(false);
        }
    }, [nameMeal, ingredients]);

  
    return(
        <Container>
           <HeaderPages onPress={goHome} title="Nova refeição" />
         
            <Main showsVerticalScrollIndicator={false}>
                <ContainerInput>
                    <Title>
                        Refeição
                    </Title>

                    <Input
                        placeholder="Nome da refeição"
                        value={nameMeal}
                        onChangeText={setNameMeal}
                    />
                    <MessageError>{ messageErrorName ? 'O nome é obrigatório' : ''}</MessageError>
                </ContainerInput>

                <ContainerInput>
                    <Title>
                        Ingredientes
                    </Title>

                    <Input
                        placeholder="Ingredientes"
                        value={ingredients}
                        onChangeText={setIngredients}
                    />
                    <MessageError>{messageErrorIngredients ? 'Os ingredientes são obrigatório' : ''}</MessageError>
                    <MessageError></MessageError>
                </ContainerInput>

                <ContainerInput border>
                    <Title>
                        Dia da semana
                    </Title>

                    <Picker
                        selectedValue={selectedDayWeek}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedDayWeek(itemValue)
                        }
                    >
                        {
                            daysWeek.map(item => 
                                <Picker.Item key={item.id} label={item.day} value={item.day} />
                            )
                        }
                    </Picker>
                </ContainerInput>

                <ContainerInput border>
                    <Title>
                        Categoria
                    </Title>

                    <Picker
                        selectedValue={selectedCategoryMeal}
                        onValueChange={(category, itemIndex) =>
                            setSelectedCategoryMeal(category)
                        }
                    >
                        {
                            categoryMeal.map(item => 
                                <Picker.Item key={item.id} label={item.category} value={item.category} />
                            )
                        }
                    </Picker>
                </ContainerInput>
                        
                <ContainerButton>
                    {
                        isLoadNewMeal ?
                        <Button 
                            title="Adicionar"
                            onPress={handleSaveMeal}
                        />
                        :
                        <ContainerLoadSave>
                            <TitleLoadSave>Adicionando</TitleLoadSave>
                            <ActivityIndicator color='#02630a' size="small" />
                        </ContainerLoadSave>
                    }
                </ContainerButton>
            </Main>
        </Container>
    );
}