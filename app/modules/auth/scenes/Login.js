import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Vibration,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import baseStyles from '../styles';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

class Login extends Component {
  state = { email: '', password: '', errorMessage: null, show: false }

  handleLogin = () => {
    this.setState({
      show: true
    });
    const { email, password } = this.state
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ show: false })
          this.props.navigation.navigate('Main')
        })
        .catch(error => this.setState({ errorMessage: error.message, show: false }))
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar translucent backgroundColor={'rgba(255,255,255,0)'} barStyle="light-content" />
        <Image
          source={require('../../../assets/backgrounds/1x/loginbg_2.png')}
          style={styles.backgroundImage}
        />
        <View style={styles.main}>
          <View style={styles.container}>
            <Text style={styles.title}> Sign In </Text>
            {this.state.errorMessage &&
            <Text style={[styles.text,{ color: 'red', fontSize: 12, marginLeft: '10%', marginRight: '10%',}]}>
              {this.state.errorMessage}
            </Text>}
            <TouchableOpacity style={styles.appButton} activeOpacity={0.5}>
              <Text style={styles.appText}> Sign in with Google </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButton} activeOpacity={0.5}>
              <Text style={styles.appText}> Sign in with Facebook </Text>
            </TouchableOpacity>
            <Text style={{color: '#000000', marginTop: 20, fontFamily: 'Montserrat-SemiBold'}}> - OR - </Text>
            <TextInput
              placeholder={'Enter your Email'}
              placeholderTextColor={'#a3a3a3'}
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              placeholder={'Enter your Password'}
              placeholderTextColor={'#a3a3a3'}
              secureTextEntry={true}
              style={styles.input}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPressIn={() => Vibration.vibrate(2)} onPress={this.handleLogin}>
              <LinearGradient
                start={{x: 0, y: 0.3}}
                end={{x: 0.8, y: 0.5}}
                colors={['#d4145a', '#9e005d']}
                style={styles.linearGradient}>
                <Text style={styles.text}> LOGIN </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text style={styles.appText}>
            Don't have an account?
            <Text style={{color: '#d4145a'}} onPress={() => this.props.navigation.navigate('SignUp')}> Sign Up </Text>
          </Text>
          {
            this.state.show &&
            <View style={styles.loadContainer}>
              <ActivityIndicator size="large" color="#9e005d" style={[styles.load, {transform: [{rotate: 90}]}]}/>
              <ActivityIndicator size="large" color="#d4145a" style={styles.load}/>
            </View>
          }
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  ...baseStyles,
});
