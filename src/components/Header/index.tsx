import React, { ReactNode} from "react";

import {
    Container,
    
} from './styles';

type Props = {
    children: ReactNode;
}

export function Header({children}: Props){
   
    return(
        <Container>
            {children}
        </Container>
    );
}