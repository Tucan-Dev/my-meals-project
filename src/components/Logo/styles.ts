import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View `
   align-items: center;
   justify-content: center;
`;

export const ContainerName = styled.View `
    flex-direction: row;
`;

export const TitleRegular = styled.Text `
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
`;

export const TitleBold = styled.Text `
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.white};
`;
