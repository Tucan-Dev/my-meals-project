import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Main,
    Logo,
    
    Button,
    ViewTitleButton,
    TitleButton,
    TextTucan,
} from './styles';

import LogoSvg from '../../assets/logotipo.svg';

import MyMealsSvg from '../../assets/iconMinhasRefeicoes.svg';
import ListaDeComprasSvg from '../../assets/iconListaDeCompras.svg';
import SobreSvg from '../../assets/iconSobre.svg';
import CloseSvg from '../../assets/iconClose.svg';

import theme from '../../global/styles/theme';


type PropsModal = {
    isVisible: boolean;
    onClose: () => void;
}

export function Menu({isVisible, onClose} : PropsModal){
    const  navigation = useNavigation();
    
    function minhaRefeicao(){
        // navigation.navigate('Home')
        onClose();
    }

    function listaCompras(){
        // navigation.navigate('ShoppingList')
        onClose();
    }

    function sobre(){
        // navigation.navigate('Sobre')
        onClose();
    }


    return(

        <Container
            visible={isVisible}
            animationType="fade"
        >
         
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
           
           <Main>
                <Header />
                <Logo>
                    <LogoSvg 
                        width={65}
                        height={65}
                    />
                </Logo>

                <Button 
                    onPress={minhaRefeicao}
                    activeOpacity={.7}
                >
                    <MyMealsSvg 
                        width={20}
                        height={20}
                    />
                    <ViewTitleButton>
                        <TitleButton>
                            Minha Refeição
                        </TitleButton>
                    </ViewTitleButton>
                </Button>


                <Button
                    activeOpacity={.7}
                    onPress={listaCompras}>
                    <ListaDeComprasSvg
                        width={20}
                        height={20}
                    />
                    
                    <ViewTitleButton>
                        <TitleButton>
                            Lista de compras
                        </TitleButton>
                    </ViewTitleButton>
                </Button>

                <Button
                    activeOpacity={.7}
                    onPress={sobre}
                >
                    <SobreSvg
                        width={20}
                        height={20}
                    />
                    <ViewTitleButton>
                        <TitleButton>
                            Sobre
                        </TitleButton>
                    </ViewTitleButton>
                </Button>

                <Button
                    activeOpacity={.7}
                    onPress={onClose}
                    close
                >
                    <CloseSvg 
                        width={20}
                        height={20}
                    />
                    <ViewTitleButton>
                        <TitleButton>
                            Fechar menu
                        </TitleButton>
                    </ViewTitleButton>
                </Button>

                <TextTucan>
                    Desenvolvido com  🧡 + ☕ por TucanDev
                </TextTucan>
           </Main>
        </Container>
    );
}