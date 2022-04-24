import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';


import {
    Container,
    Title
} from './styles';

import MenuSvg from '../../assets/menu.svg';


type Props = RectButtonProps & {
    title: string;
    heightModal?: boolean;
};

export function Button({ title, heightModal, ...rest}: Props){
   
    return(
        <Container
            heightModal={heightModal}
            {...rest}
        >
           <Title>
                {title}
           </Title>
        </Container>
    );
}