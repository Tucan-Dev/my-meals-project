import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
    close?: boolean;
}

export const Container = styled.Modal `
   flex: 1;
   background-color: ${({ theme }) => theme.colors.primary};
`

export const Header = styled.View `
    width: 100%;
    height: ${RFValue(157)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-bottom-right-radius: 30px;
`

export const Main = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;
`

export const Logo = styled.View `
    width: 146px;
    height: 146px;
    border-width: 7px;
    border-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 73px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-top: -50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 37px;
`

export const Button = styled.TouchableOpacity<Props>`
    background-color: ${({ theme }) => theme.colors.background};
    height: ${RFValue(40)}px;
    flex-direction: row;
    padding: 0 15px 0 15px;
    align-items: center;
    border-radius: 8px;

    margin-bottom: 33px;
    margin-left: 48px;
    margin-right: 48px;
    border-width: 2px;

    border-color: ${({theme, close}) => 
        close ? theme.colors.red: theme.colors.background
    };  

`

export const ViewTitleButton = styled.View`
    flex: 1;
    margin-left: 17px;
    justify-content: center;
    margin-top: 3px;
`

export const TitleButton = styled.Text`
   color: ${({ theme }) => theme.colors.title};
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: ${RFValue(15)}px;
`


export const TextTucan = styled.Text`
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.semiBold};
   font-size: ${RFValue(12)}px;
   position: absolute;
   bottom: 10px;
`



export const ButonClose = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: 5px;
    width: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
    align-items: center;
    margin-top: 50px;
`

export const TitleClose = styled.Text`
   color: ${({ theme }) => theme.colors.white};
   font-size: ${RFValue(20)}px;
` 