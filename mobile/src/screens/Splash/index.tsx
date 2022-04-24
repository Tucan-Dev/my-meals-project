import React, { useEffect } from "react";
import { StatusBar, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';



import {
    Container,
    Header,
    Title
} from './styles';

import ImageTelaSplashSvg from '../../assets/imageTelaSplash.svg';
import { ButtonEnter } from "../../components/ButtonEnter";
import { Logo } from "../../components/Logo";

import { useMealStorage } from '../../hooks/meals';

export function Splash(){
    const { width, height } = Dimensions.get('window');

    const { loadStorageHourMeal } = useMealStorage();
    
    useEffect(() => {
        loadStorageHourMeal();
    }, []);

    return(
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
           <Header >
               <Logo />
               <ImageTelaSplashSvg
                    width={RFValue(251)}
                    height={RFValue(251)}
               />

               <Title>
                    Controle suas {`\n`}
                    refeições de maneira {`\n`}
                    fácil e simplificada
               </Title>
           </Header>
           <ButtonEnter />
           
        </Container>
    );
}