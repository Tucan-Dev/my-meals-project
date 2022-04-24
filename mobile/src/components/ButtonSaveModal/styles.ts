import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    isModal: Boolean;
}

export const Container = styled.TouchableOpacity<Props> `
    width: 100%;
    height: ${RFValue(42.6)}px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ isModal, theme }) => 
        isModal ? theme.colors.markerCircle :  theme.colors.text
    };
`

export const Title = styled.Text `
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`