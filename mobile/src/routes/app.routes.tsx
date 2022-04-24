import React, { useState, useEffect } from "react";
import { StyleSheet, View, Keyboard, Text } from 'react-native';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { ShoppingList } from '../screens/ShoppingList';
import { Sobre } from '../screens/Sobre';

import HomeSvg from '../assets/icon-menu/home.svg';
import ShoppingListSvg from '../assets/icon-menu/shoppingList.svg';
import SettingsSvg from '../assets/icon-menu/configuration.svg';
import theme from "../global/styles/theme";
import AppLoading from "expo-app-loading";
import { Settings } from "../screens/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppRoutes(){

    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [isaActiveHome, setIsActive] = useState(true);
   
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return(
        <Tab.Navigator
            initialRouteName="Home"
           screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                height: 62,
                backgroundColor: "#fff",
                position: "absolute",
                marginLeft: 16,
                marginRight: 16,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            }
           }}
        >

            <Tab.Screen
                name="Home"
                component={TabHomeRoutes}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.areaIcon, 
                        focused && styles.areaIconSelected, 
                        keyboardStatus && styles.areaIconKeyboardTrue ]}>
                            <HomeSvg
                                width={18}
                                height={18}
                                fill={focused ? "#fff" : "#003333"}
                            />
                            {
                                focused &&
                                <Text style={styles.textMenu}>Home</Text>
                            }
                        </View>
                    )
                }}
                listeners={({navigation, route}) => ({
                    tabPress: e => {
                        setIsActive(true);
                    }
                })}
            />

            <Tab.Screen
                name="ShoppingList"
                component={TabShoppingListRoutes}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.areaIcon, 
                            focused && styles.areaIconSelected, 
                            focused && styles.shoppingListSelected, 
                            focused == false && styles.shoppingListDisabled, 
                            isaActiveHome == true && styles.isActiveHome,
                            keyboardStatus && styles.areaIconKeyboardTrue ]}>
                            <ShoppingListSvg
                                width={18}
                                height={20}
                                fill={focused ? "#fff" : "#003333"}
                            />
                            {
                                focused &&
                                <Text style={styles.textMenu}>Lista de compras</Text>
                            }
                        </View>
                    )
                }}
                listeners={({navigation, route}) => ({
                    tabPress: e => {
                        setIsActive(false);
                    }
                })}
            />
            <Tab.Screen
                name="Settings"
                component={TabSettingsRoutes}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.areaIcon, 
                        focused && styles.areaIconSelected, 
                        focused && styles.settingsSelected,
                       
                        ]}>
                            <SettingsSvg
                                width={19}
                                height={22}
                                fill={focused ? "#fff" : "#003333"}
                            />
                            {
                                focused &&
                                <Text style={styles.textMenu}>Configurações</Text>
                            }
                        </View>
                    )
                }}
                listeners={({navigation, route}) => ({
                    tabPress: e => {
                        setIsActive(false);
                    }
                })}
            />

        </Tab.Navigator>
    );
}

function TabHomeRoutes(){
    return(
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="HomeTabs"
                component={Home}
            />

            <Stack.Screen
                name="SobreHome"
                component={Sobre}
            />
            
        </Stack.Navigator>
    );
}

function TabShoppingListRoutes(){
    return(
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="ShoppingListTabs"
                component={ShoppingList}
            />

            <Stack.Screen
                name="SobreShoppingList"
                component={Sobre}
            />
            
        </Stack.Navigator>
    );
}


function TabSettingsRoutes(){
    return(
        <Stack.Navigator
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            <Stack.Screen
                name="SettingsTabs"
                component={Settings}
            />

            <Stack.Screen
                name="SobreSettings"
                component={Sobre}
            />
            
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    areaIcon: {
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    areaIconSelected: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 16,
        backgroundColor: theme.colors.secondary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    shoppingListSelected: {
        width: 160,
    },
    isActiveHome: {
        marginRight: 0,
        marginLeft: 30,
    },
    shoppingListDisabled: {
        marginRight: 100,
    },
    settingsSelected: {
        width: 150,
        marginRight: 70
    },
    areaIconKeyboardTrue: {
        width: 0,
        height: 0,
        marginBottom: 0,
    },
    textMenu: {
        fontSize: 12,
        fontFamily: theme.fonts.medium,
        color: theme.colors.white,
        marginLeft: 8,
        paddingTop: 2
    }
})