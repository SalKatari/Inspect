import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, StatusBar, Image, ScrollView, TouchableOpacity, Linking} from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Cards from "../components/Cards";
import SnackBar from 'react-native-snackbar-component'

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class InfoScreen extends Component {

    state = {currentUser: null, snackbar: false}

    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }


    onSuccess = e => {
      const newReference = database()
      .ref('/users/'+this.state.currentUser.uid)
      .push();
      newReference
      .set({
        time: new Date().toLocaleTimeString(),
        location: e.data,
      }).then(
        this.setState({ snackbar: true }),
        setTimeout(()=>{this.setState({snackbar: false})}, 3000)
      )
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#f0f0f0'} barStyle="dark-content" />
                <Text style={styles.text}>SCAN QR CODE</Text>
                <QRCodeScanner
                  showMarker={true}
                  style={styles.scanner}
                  onRead={this.onSuccess}
                  reactivate={true}
                  reactivateTimeout={10000}
                  cameraStyle={{ width: '100%', alignSelf: 'center'}}
                />
                <Text style={styles.lightText}>Adjust your camera so that the entire QR Code is visible in the viewport.</Text>
                <SnackBar backgroundColor={'#000000'} accentColor={'#d4145a'} visible={this.state.snackbar} textMessage="Scan successful." actionHandler={() => this.props.navigation.navigate('Home')} actionText=' CHECK UPDATES'/>
            </View>
        )
    }
}

export default InfoScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        marginTop: 35,
    },
    lightText: {
        fontSize: 15,
        width: '80%',
        textAlign: 'center',
        fontFamily: 'Montserrat-Light',
        color: '#000000',
        marginBottom: 35,
    },
})
