import React, { useState } from "react";

import * as SP from  './styles';

import { HeaderPages } from "../../components";
import { aboutText, version } from "../../ultils/about";

export function Sobre(){
   
    return(
        <SP.Container>
           <HeaderPages title="Sobre" isAbout={true}/>
           <SP.Scroll>
                <SP.Main>
                    <SP.TextAbout>
                        {aboutText[0]} {'\n'}
                    </SP.TextAbout>
                    
                    <SP.TextAbout>
                        {aboutText[1]}
                    </SP.TextAbout>

                    <SP.Version>{version}</SP.Version>

                    <SP.TextTucan>
                        Desenvolvido com  🧡 + ☕ por TucanDev
                    </SP.TextTucan>
                </SP.Main>
           </SP.Scroll>
        </SP.Container>
    );
}