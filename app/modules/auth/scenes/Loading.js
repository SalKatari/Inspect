import React from 'react'
import {View, Text, ActivityIndicator, StyleSheet, Image, StatusBar} from 'react-native'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'



export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Login')
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#f0f0f0'} barStyle="dark-content" />
                <Image
                    source={require('../../../assets/backgrounds/1x/fullLogo_light.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}> Loading... </Text>
                <ActivityIndicator size="large" color="#9e005d" style={[styles.load,{transform: [{ rotate: 90 }]}]}/>
                <ActivityIndicator size="large" color="#d4145a" style={styles.load}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 60,
        resizeMode: 'contain',
        marginBottom: 100,
    },
    text: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        color: '#424242',
        marginBottom: 30,
    },
    load: {
        position: 'absolute',
        opacity: 0.8,
    },
})
