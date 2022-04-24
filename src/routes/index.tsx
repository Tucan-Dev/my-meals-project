import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes  from './app.routes'; 
import InitialRoutes from './initial.routes'; 

import { useMealStorage } from '../hooks/meals';


export function Routes(){
    const { mealDomingo, mealSegunda, mealTerca, mealQuarta, mealQuinta, mealSexta, mealSabado, loadStorageMeals } = useMealStorage();
    let veficationData = false;
    // if(mealDomingo.length > 0 || mealSegunda.length > 0 || mealTerca.length > 0 || mealQuarta.length > 0 || mealQuinta.length > 0 || mealSexta.length > 0 || mealSabado.length > 0){
    //     veficationData = true;
    // }

    useEffect(() => {
        loadStorageMeals();
    },[]);

    return (
        <NavigationContainer>
            {veficationData ? <AppRoutes/> : <InitialRoutes />} 
        </NavigationContainer>
    );
}