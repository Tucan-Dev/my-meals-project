import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    border?: boolean;
}

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Main = styled.ScrollView `
    flex: 1;
    margin-top: 24px;
    padding-left: 30px;
    padding-right: 30px;
`

export const ContainerInput = styled.View<Props> `
    margin-bottom: 30px;
    border-bottom-width: ${({ border }) => 
        border ? `1px` : 0
    };
    border-color: ${({ theme }) => theme.colors.text};
`

export const Title = styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
`

export const Input = styled.TextInput `
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.title};
    padding-top: 8px;

    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.text};
`

export const MessageError = styled.Text `
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.red};
    text-align: left;
`

export const ContainerButton = styled.View `
    width: 100%;
    margin-bottom: 30px;
`


export const ContainerLoadSave = styled.View `
    width: 100%;
    height: ${RFValue(56)}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const TitleLoadSave = styled.Text `
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    margin-right: 5px;
`