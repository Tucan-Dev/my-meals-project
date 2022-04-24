import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { TextInputMask } from 'react-native-masked-text'

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Main = styled.ScrollView `
    flex: 1;
    padding-top: 24px;
    padding-bottom: 37px;
    padding-left: 30px;
    padding-right: 30px;
`

export const Content = styled.View `
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 32px;
`

export const TitleInput= styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`

export const Input = styled(TextInputMask) `
    flex: 1;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title_secondary};
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.text};
`

export const TextBetween = styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: 18px;
    margin-right: 18px;
`

export const ContainerButton = styled.View `
    width: 100%;
    padding-top: 50px;
    margin-bottom: 110px;
`

export const TextWarning= styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.red};
    margin-top: -20px;
`