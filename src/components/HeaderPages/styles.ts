import styled, { css } from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons';

interface Props {
    isHome?: boolean;
}

export const Container = styled.View `
    width: 100%;
    height: ${RFValue(160)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-top: 40px;
    padding-left: 22px;
    padding-right: 22px;
    padding-bottom: 15px;
    justify-content: flex-end;
`

export const HeaderButton = styled.View<Props> `
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${({ isHome }) => isHome ? '-15px': '10px'} ;
    
    ${({ isHome }) =>
     isHome
     ? css `align-items: flex-start;
        margin-bottom: ${RFValue(6)}px;`
     : css`align-items: center;`
    };
`

export const Buttons = styled.View `
    
`

export const ButonBack = styled(BorderlessButton) `
    flex-direction: row;
    justify-content: space-between;
`

export const IconGoBack = styled(Entypo) `
  font-size: 17px; 
  color: ${({ theme }) => theme.colors.white};
`

export const TextButtonGoBack = styled.Text `
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
    margin-left: 8px;
`

export const ContainerTitle = styled.View `
    width: 100%;
    align-items: center;
    margin-top: 10px;
`

export const Title = styled.Text `
    font-size: ${RFValue(24)}px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.white};
`

export const ContentPageHome = styled.View `

`

export const DayWeek = styled.Text `
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(24)}px;
    margin-bottom: 3px;
    margin-left: 8px;
`

export const Data = styled.Text `
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    margin-left: 8px;
`