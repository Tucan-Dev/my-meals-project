import React from "react";
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';


import {
    Container,
    Title
} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    isModal: boolean;
};

export function ButtonSaveModal({ title, isModal, ...rest}: Props){
   
    return(
        <Container
            isModal={isModal}
            disabled={!isModal}
            {...rest}
        >
           <Title>
                {title}
           </Title>
        </Container>
    );
}