import React from "react";
import { StyleSheet, TextInputProps } from 'react-native';

import {
    Container,
    ContainerSecondary,
    TextInput
   
} from './styles';

interface Props extends TextInputProps{};

export function Input({
  ...rest
}:Props ){
   
    return(
        <Container style={styles.shadow}>
            <ContainerSecondary>
                <TextInput
                    {...rest}
                />
            </ContainerSecondary>
        </Container>
    );
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'rgba(134, 140, 159, 0.2)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        
        elevation: 1,
    }
});