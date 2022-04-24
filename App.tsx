import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import FlashMessage from "react-native-flash-message";

//fontes
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


import { Routes }  from './src/routes';
import theme from './src/global/styles/theme';
import { MealProvider } from './src/hooks/meals';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    
      <ThemeProvider theme={theme}>
        <MealProvider>
          <Routes />
          <FlashMessage position="top" />
        </MealProvider>
      </ThemeProvider>
    
  );
}


