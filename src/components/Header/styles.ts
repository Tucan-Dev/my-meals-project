import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
    width: 100%;
    height: ${RFValue(160)}px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
`