import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";


export const Container = styled.View `
   width: 100%;
   border-radius: 8px;
   background-color: ${({ theme }) => theme.colors.white};
   padding: 21px;
`;

export const ContainerDelete = styled.View `
   width: 100%;
   align-items: flex-end;
`;

export const ButtonDelete = styled.TouchableOpacity `
  
   
`;

export const IconDelete = styled(Ionicons) `
    font-size: ${RFValue(22)}px;
    color: ${({ theme }) => theme.colors.red};
`;

export const Form = styled.View `
   margin-right: 23px;
   margin-left: 23px;
`;


export const Title = styled.Text `
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    margin-bottom: 12px;
`;


export const NameMeal = styled.Text `
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 12px;
    margin-bottom: 2px;
`;

export const Ingredients = styled(NameMeal) `
  margin-top: 32px;
`;

export const ContainerButton = styled.View `
    margin-top: 33px;
    margin-bottom: 14px;
`;