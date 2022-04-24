import React from "react";
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Icon,
    ContainerTitle,
    Title
} from './styles';

import EntrarSvg from '../../assets/Entrar.svg';

export function ButtonEnter(){
    const navigation = useNavigation();

    return(
        <Container
            onPress={() => navigation.navigate('App')}
        >
            <Icon>
                <EntrarSvg
                    width={RFValue(24)}
                    height={RFValue(24)}
                />
            </Icon>
            <ContainerTitle>
                <Title>
                    Crie seu cardápio
                </Title>
            </ContainerTitle>
        </Container>
    );
}