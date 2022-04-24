import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View `
    width: 100%;
    height: 56px;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    justify-content: space-between;

`

export const Input = styled.TextInput `
    max-width: ${RFValue(250)}px;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
`

export const Button = styled.TouchableOpacity`
    width: 56px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    align-items: center;
    justify-content: center;
`

