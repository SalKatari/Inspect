import React from "react";
import {createAppContainer} from "react-navigation";
import {createSwitchNavigator} from "react-navigation-switch-transitioner";

import {OnboardingNavigator} from "./auth/scenes/OnboardingNavigator";
import {AppStack} from "./MainNavigator";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import globalStyles from "../modules/styles";
import SettingsScreen from "./settings/SettingsScreen";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const AppNavigator = createSwitchNavigator(
    {
        Auth: {
            screen: OnboardingNavigator,
        },
        AppStack: {
            screen: AppStack,
        },
    },
    {
        initialRouteName: "Auth",
    }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    ...globalStyles,
});
