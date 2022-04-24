import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { NewMeal } from '../screens/NewMeal';
import { ShoppingList } from '../screens/ShoppingList';
import { Sobre } from '../screens/Sobre';

import AppRoutes from './app.routes';


export default function InitialRoutes(){
    const { Navigator, Screen } = createStackNavigator();
    return(
        <Navigator
            headerMode="none"
        >
                <Screen
                    name="Splash"
                    component={Splash}
                />

                <Screen
                    name="App"
                    component={AppRoutes}
                />
            
        </Navigator>
    );
}