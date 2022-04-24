import React from "react";

import {
    Container,
    ContainerName,
    TitleRegular,
    TitleBold
} from './styles';

import LogoSvg from '../../assets/logotipo.svg'

export function Logo(){
   
    return(
        <Container>
           <LogoSvg
                width={50}
                height={46}
           />

           <ContainerName>
               <TitleRegular>
                   My
               </TitleRegular>
               <TitleBold>
                   Meals
               </TitleBold>
           </ContainerName>
        </Container>
    );
}