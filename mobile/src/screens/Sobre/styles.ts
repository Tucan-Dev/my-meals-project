import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
   
`

export const Scroll = styled.ScrollView `
    flex: 1;
    margin-top: 49px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 103px;
    border-radius: 16px;
`

export const Main = styled.View `
    flex: 1;
    padding-top: 23px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 23px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.white};
`

export const TextAbout= styled.Text `
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.secondary};
`

export const Version= styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 30px;
`

export const TextTucan = styled.Text`
   color: ${({ theme }) => theme.colors.text};
   font-family: ${({ theme }) => theme.fonts.semiBold};
   font-size: ${RFValue(12)}px;
`