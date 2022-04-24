import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View `
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
`

export const Header = styled.View `
    width: 100%;
    height: 80%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    justify-content: center;
    align-items: center;
    padding-left: 44px;
    padding-right: 44px;
`

export const Title = styled.Text `
    font-size: ${RFValue(25)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    
`
