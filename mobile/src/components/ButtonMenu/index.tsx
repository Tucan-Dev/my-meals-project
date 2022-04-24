import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';


import {
    Container,
    
} from './styles';

import MenuSvg from '../../assets/menu.svg';


type Props = RectButtonProps;

export function ButtonMenu({ ...rest}: Props){
   
    
   
    return(
        <Container
            {...rest}
        >
           <MenuSvg
                width={30}
                height={30}
           />
        </Container>
    );
}