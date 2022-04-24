import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    heightModal?: boolean;
}

export const Container = styled(RectButton)<Props> `
    width: 100%;
    height: ${({ heightModal }) => 
       heightModal ? `${RFValue(42.6)}px` : `${RFValue(56)}px`
    };
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ heightModal, theme }) => 
        heightModal ? theme.colors.markerCircle : theme.colors.primary
    };
`

export const Title = styled.Text `
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`