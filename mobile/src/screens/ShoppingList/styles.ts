import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    padding-bottom: ${getBottomSpace() + RFValue(37)}px;
`

export const ContainerSecondary = styled.View `
    flex: 1;
    margin-top: 24px;
    margin-bottom: 37px;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
  
`

export const Header = styled.View `
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`

export const TitleHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(24)}px;
`

export const ButtonClean = styled.TouchableOpacity `
    width: 100px;
    height: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.red};
    margin-bottom: 5px;
`

export const TitleClean = styled.Text `
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    color: ${({ theme }) => theme.colors.white};
`

export const ContainerAviso = styled.View `
    width: 100%;
    height: 60%;
    align-items: center;
    justify-content: center;
`

export const TitleListaVazia = styled.Text `
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: center;
    color: ${({ theme }) => theme.colors.red};
    margin-top: 20px;
`

export const ViewInput = styled.View `
    width: 100%;
    position: absolute;
    bottom: 5px;
`