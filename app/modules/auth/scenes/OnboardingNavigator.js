import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import Login from './Login';
import SignUp from './SignUp';
import Loading from "./Loading";
import {AppStack} from "../../MainNavigator"
import SettingsScreen from "../../settings/SettingsScreen";

import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCog, faChevronLeft, faInfoCircle} from "@fortawesome/free-solid-svg-icons";

export const OnboardingNavigator = createStackNavigator(
    {
        Loading: {
            screen: Loading,
        },
        Login: {
            screen: Login,
        },
        SignUp: {
            screen: SignUp,
        },
        Main: {
            screen: AppStack,
            navigationOptions: {
                headerShown: true,
                header: (props) =>
                    <View style={[styles.header,{justifyContent: 'space-between',}]}>
                        <Image
                            source={require('../../../assets/backgrounds/1x/fullLogo_light.png')}
                            style={styles.logo}
                        />
                        <TouchableOpacity style={{padding: 3}} onPress={() => props.navigation.navigate('Settings')}>
                            <FontAwesomeIcon icon={ faInfoCircle } size={21}/>
                        </TouchableOpacity>
                    </View>
                ,
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                headerShown: true,
                header: (props) =>
                    <View style={[styles.header,{justifyContent: 'flex-start',}]}>
                        <TouchableOpacity style={{padding: 10}} onPress={() => props.navigation.navigate('Main')}>
                            <FontAwesomeIcon icon={ faChevronLeft } size={21}/>
                        </TouchableOpacity>
                        <Image
                            source={require('../../../assets/backgrounds/1x/fullLogo_light.png')}
                            style={styles.logo}
                        />
                    </View>
                ,
            }
        },
    },
    {
        initialRouteName: 'Loading',
        defaultNavigationOptions: {
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
        },
    },
);

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: "#f0f0f0",
        elevation: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    logo: {
        height: 30,
        width: 100,
        resizeMode: 'contain',
    },
})
