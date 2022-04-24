import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';
import { View, ViewProps } from 'react-native';


interface ItemsProps {
    done: boolean;
}

export const Container = styled.View `
    width: 100%;

    margin-bottom: ${getBottomSpace() + RFValue(160)}px;
    justify-content: center;
`

export const Items = styled.View<ItemsProps>`
    width: 99%;
    height: ${RFValue(46)}px;
    flex-direction: row;
   
    background-color: ${({ theme }) =>  theme.colors.marker};
    border-radius: 4px;
    flex-wrap: wrap;
    margin-top: 2px;
    margin-bottom: 11px;
    margin-left: 2px;

    background-color: ${({theme, done}) => 
        done ? theme.colors.marker: theme.colors.white
    };   
`

export const ContainerItem = styled(RectButton)<ItemsProps>`
    flex: 1;
    height: ${RFValue(46)}px;
    flex-direction: row;
    align-items: center;
    padding: 0 0 0 8px;
    border-radius: 4px;
    
    background-color: ${({theme, done}) => 
        done ? theme.colors.marker: theme.colors.white
    };
`

   
export const Marker = styled.View<ItemsProps>`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    flex-direction: row;
    border-width: 2px;
    border-color: ${({ theme }) =>  theme.colors.title};

    background-color: ${({theme, done}) => 
        done ? theme.colors.markerCircle: theme.colors.white
    };
`

export const ViewTitle = styled.View `
    flex: 1;
    margin-left: 11px;
    margin-right: 5px;   
`

export const TitleItem = styled.Text<ItemsProps> `
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) =>  theme.fonts.regular};
    color: ${({ theme }) =>  theme.colors.title};

    ${({ done }) => done === true && css`
       text-decoration: line-through;
    `}
    margin-top: 4px;

`

// export const Price = styled.Text `
//     font-size: ${RFValue(14)}px;
//     font-family: ${({ theme }) =>  theme.fonts.regular};
//     color: ${({ theme }) =>  theme.colors.title};
// `

export const Delete = styled.TouchableOpacity `
    width: 41px;
   
    background-color: ${({ theme }) => theme.colors.red};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    align-items: center;
    justify-content: center;
`
