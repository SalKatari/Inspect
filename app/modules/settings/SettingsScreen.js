import React from 'react'
import {StatusBar, StyleSheet, Text, TouchableOpacity, Vibration, View} from 'react-native'
import firebase from '@react-native-firebase/app'
import LinearGradient from "react-native-linear-gradient";

export default class Main extends React.Component {
    state = {currentUser: null}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
        console.log(currentUser)
    }

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            navigate('Login');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log('MAIN SCREEN');
        const {currentUser} = this.state
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#f0f0f0'} barStyle="dark-content"/>
                <Text style={styles.text}>
                    INFO
                </Text>
                <Text style={styles.lightText}>
                    Email : {currentUser && currentUser.email}
                </Text>
                <Text style={styles.lightText}>
                    User ID : {currentUser && currentUser.uid}
                </Text>
                <Text style={styles.lightText}>
                    App Version : v1.0
                </Text>
                <Text style={styles.lightText}>
                    Powered by Amazon Firebase
                </Text>
                <Text style={styles.lightText}>
                    Provided by Inspect AISS
                </Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPressIn={() => Vibration.vibrate(2)} onPress={this.signOutUser}>
                    <LinearGradient
                        start={{x: 0, y: 0.3}}
                        end={{x: 0.8, y: 0.5}}
                        colors={['#d4145a', '#d4145a']}
                        style={styles.linearGradient}>
                        <Text style={styles.buttonText}> SIGN OUT </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 25,
    },
    text: {
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
        color: '#424242',
        marginBottom: 10,
    },
    lightText: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        color: '#424242',
        marginBottom: 10,
    },
    button: {
        width: '60%',
        height: 40,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: '#ffffff',
    },
    linearGradient: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
