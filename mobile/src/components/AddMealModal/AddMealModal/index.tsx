import React, { useState, useEffect } from "react";
import { ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";

import { Input } from '../Input';
import { ButtonSaveModal } from '../../ButtonSaveModal';

import {
    Container,

    ContainerDelete,
    ButtonDelete,
    IconDelete,
    Form,
    Title,
    NameMeal,
    Ingredients,
    ContainerButton
} from './styles';
import { mealDTO } from "../../../dtos/mealDTO";
import { useMealStorage } from '../../../hooks/meals';

// interface PropsMealSelect {
//     meal: string;
//     title: string;
//     ingredientes: string;
// }

interface Props {
    handleCloseModal: () => void;
    dataMeal: mealDTO;
}

export function AddMealModal({
    handleCloseModal,
    dataMeal
}: Props){
    const { saveStorageMeals } = useMealStorage();

    const [nameMeal, setNameMeal] = useState('')
    const [ingredients, setIngredients] = useState('');
    const [isColorChange, setIsColorChange] = useState(false);
   

    useEffect(() => {
        setNameMeal(dataMeal?.meal.title);
        setIngredients(dataMeal.meal.ingredientes);
    }, [])

    useEffect(() => {
        if(nameMeal != dataMeal.meal.title || ingredients != dataMeal.meal.ingredientes){
            setIsColorChange(true);
        }else{
            setIsColorChange(false);
        }
    },[nameMeal, ingredients]) 

    function saveMeal(){
        const dataSave = {
            nameMeal,
            ingredients,
            selectedDayWeek: dataMeal.id,
            selectedCategoryMeal: dataMeal.meal.meal
        }

        saveStorageMeals(dataSave);
        handleCloseModal();
    }

    return(
        <Container>
            <ContainerDelete>
                <ButtonDelete onPress={handleCloseModal}>
                    <IconDelete
                        name="close"
                    />
                </ButtonDelete>
            </ContainerDelete>
            <Form>
                <Title>{dataMeal.meal.meal}</Title>

                <NameMeal>Nome da refeição</NameMeal>
                <Input 
                    value={nameMeal}
                    onChangeText={setNameMeal}
                />

                <Ingredients>Ingredientes</Ingredients>
                <Input 
                    value={ingredients}
                    onChangeText={setIngredients}
                />

                <ContainerButton>
                    <ButtonSaveModal 
                        title="Salvar refeição"
                        onPress={saveMeal}
                        isModal={isColorChange}
                    />
                </ContainerButton>
            </Form>
        </Container>
    );
}