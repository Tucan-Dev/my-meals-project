import React, { memo, useEffect, useMemo, useState } from "react";
import { Text, TouchableOpacityProps } from "react-native";
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { useMealStorage } from '../../hooks/meals';

import {
    Container,
    ContainerSecondaryMeal,
    TypeMeals,
    ContainerMeals,
    TitleMeal,
    Ingredients,
    TextAdd
} from './styles';


interface Props extends BorderlessButtonProps {
    data: {
        meal: string;
        title: string;
        ingredientes: string;
    }
    date?: string;
}

export function Meals({data, ...rest}: Props){

    const { hourMeal } = useMealStorage();

    const [isBorder, setIsBorder] = useState(false);

    useEffect(() => {
        let dateCurrent = new Date();
        let houCurrent = new Date(`April 04 2021 ${dateCurrent.getHours()}: ${dateCurrent.getMinutes()}:00`);
    
        hourMeal.map((item) => {
            if(item.idMeal == data.meal){
                let hourStart = new Date(`April 04 2021 ${item.inicio}:00`);
                let hourEnd = new Date(`April 04 2021 ${item.termino}:00`);
    
                if (houCurrent.getTime() >= hourStart.getTime() && houCurrent.getTime() <= hourEnd.getTime() ) {
                    setIsBorder(true);
                }else{
                    setIsBorder(false);
                }
            }
        })
    }, [hourMeal]);

    return(
        <Container>
            <TypeMeals>
                {data.meal}
            </TypeMeals>
            <ContainerMeals {...rest}>
                <ContainerSecondaryMeal selected={isBorder}>
                {
                    data.meal === '' || data.title === '' || data.ingredientes === '' ?
                    <TextAdd>Clique para adicionar!</TextAdd>
                    :
                    <>
                        <TitleMeal>
                            {data.title }
                        </TitleMeal>

                        <Ingredients>
                            {data.ingredientes}
                        </Ingredients>
                    </>
                }
                </ContainerSecondaryMeal>
            </ContainerMeals>
           
        </Container>
    );
}