import React from 'react'
import {StyleSheet, Text, View, Button, StatusBar, Image, ScrollView, TouchableOpacity, Vibration} from 'react-native'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHome, faWallet, faThList, faUser, faCog, faSearch} from '@fortawesome/free-solid-svg-icons'
import Cards from '../components/Cards';
import LinearGradient from "react-native-linear-gradient";

export default class Main extends React.Component {
    state = {currentUser: null}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
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
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#f0f0f0'} barStyle="dark-content"/>
                <Text style={styles.text}>
                    Logged in as : {this.state.currentUser && this.state.currentUser.email}
                </Text>
                {this.state.currentUser &&
                <ScrollView style={styles.content} contentContainerStyle={{ justifyContent:'center', alignItems:'center',}}>
                  <Cards currentUser={this.state.currentUser.uid}/>
                </ScrollView>
                }
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPressIn={() => Vibration.vibrate(2)} onPress={this.signOutUser}>
                    <LinearGradient
                        start={{x: 0, y: 0.8}}
                        end={{x: 0.4, y: 0.5}}
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        color: '#424242',
        marginTop: 30,
        marginBottom: 30,
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
    content: {
      width: '100%',
      height: '50%',
    },
})
