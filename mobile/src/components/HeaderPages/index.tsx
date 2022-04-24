import React, { useState } from "react";

import { RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    HeaderButton,
    Buttons,
    ButonBack,
    IconGoBack,
    TextButtonGoBack,
    ContainerTitle,
    Title,
    
    ContentPageHome,
    DayWeek,
    Data
} from './styles';

import HomeSvg from '../../assets/home.svg';
import BackSvg from '../../assets/arrow_back.svg';
import { ButtonAbout } from "../../components/ButtonAbout";

type Props = {
    title?: string;
    isAbout?: boolean;
    handleAbout?: () => void;
    dayWeekFormat?: string;
    isHome?: boolean;
    date?: Number;
    monthFormat?: string;
}

export function HeaderPages({title, isAbout, handleAbout, isHome, dayWeekFormat, date, monthFormat}: Props){
    const navigation = useNavigation();

    function goBack(){
        navigation.goBack();
    }

    
    return(
        <Container>

            <HeaderButton isHome={isHome}>
                {
                    isHome ? 
                    <ContentPageHome>
                        <DayWeek>{`${dayWeekFormat}`}</DayWeek>
                        <Data>{`${date} de ${monthFormat}`}</Data>
                    </ContentPageHome>
                    :
                    <ButonBack onPress={goBack}>
                        <IconGoBack
                            name="chevron-left"
                        />
                        <TextButtonGoBack>VOLTAR</TextButtonGoBack>
                    </ButonBack>
                }

                {
                    isAbout != true &&
                    <Buttons>
                        <ButtonAbout onPress={handleAbout} />
                    </Buttons>
                }

            </HeaderButton>
         
            {
                isHome != true &&
                <ContainerTitle>
                    <Title>
                        {title}
                    </Title>
                </ContainerTitle>
            }

        </Container>
    );
}