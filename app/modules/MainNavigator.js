import InfoScreen from "./info/InfoScreen";
import HomeScreen from "./home/HomeScreen";

import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHome, faQrcode} from "@fortawesome/free-solid-svg-icons";

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from "react-native";

const Tab = createBottomTabNavigator();

export const AppStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: '#fff',
                    inactiveTintColor: '#000000',
                    showLabel: false,
                    activeBackgroundColor: '#d4145a',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faHome} size={21} color={color}/>
                        </TouchableOpacity>
                    ),
                }}/>
                <Tab.Screen name="Info" component={InfoScreen} options={{
                    tabBarIcon: ({color, size}) => (
                        <TouchableOpacity>
                            <FontAwesomeIcon icon={faQrcode} size={16} color={color}/>
                        </TouchableOpacity>
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
