import React from "react";
import { BorderlessButtonProps } from 'react-native-gesture-handler';


import {
    Container,
    
} from './styles';

import InfoSvg from '../../assets/iconInfo.svg';


type Props = BorderlessButtonProps;

export function ButtonAbout({ ...rest}: Props){
   
    return(
        <Container
            {...rest}
        >
           <InfoSvg
                width={24}
                height={24}
           />
        </Container>
    );
}