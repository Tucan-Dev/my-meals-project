import styled from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface DaySelected {
    selected: boolean;
}

export const Container = styled.View `
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 12px;
`

export const TypeMeals = styled.Text `
    width: ${RFValue(60)}px;
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
    margin-right: 10px;
    text-align: right;
`

export const ContainerMeals = styled(BorderlessButton) `
    width: 85%;
`
export const ContainerSecondaryMeal = styled.View<DaySelected> `
    width: 100%;
    padding: 19px 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-left-width: 5px;
    border-color: ${({ theme, selected }) => selected ? theme.colors.secondary : theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
`

export const TitleMeal = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 9px;
`

export const Ingredients = styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text};
    margin-right: 15px;
`

export const TextAdd = styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`

