import styled from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface DaySelected {
    selected: boolean;
}

export const Container = styled(BorderlessButton) `
    align-items: center;
`

export const Day =  styled.Text<DaySelected>  `
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ selected, theme }) => 
        selected ? theme.colors.primary : theme.colors.title 
    };
    margin-bottom: 13px;
`

export const SelectedVisible = styled.View<DaySelected> `
    width: ${RFValue(5)}px;
    height: ${RFValue(5)}px;
    border-radius: 2.5px;
    background-color: ${({ selected,  theme }) =>  
       selected ? theme.colors.primary : theme.colors.background
    };
`