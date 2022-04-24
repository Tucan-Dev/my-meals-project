import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View `
    width: 100%;
    height: ${RFValue(39)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    margin-top: 3px;
`;

export const ContainerSecondary = styled.View `
    width: 100%;
    height: ${RFValue(40)}px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    margin-top: -2px;
`;

export const TextInput = styled.TextInput `
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title_secondary};
 
`;

