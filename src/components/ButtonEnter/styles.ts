import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton) `
    width: ${RFValue(295)}px;
    height: ${RFValue(56)}px;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
    position: relative;
    margin-top: -24px;
`

export const Icon = styled.View `
    width: ${RFValue(56)}px;
    height: ${RFValue(56)}px;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.colors.background};
    justify-content: center;
    align-items: center;
`

export const ContainerTitle = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text `
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    text-align: center;
    color: ${({ theme }) => theme.colors.title};
`