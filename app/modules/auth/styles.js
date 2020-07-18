import {StyleSheet} from 'react-native';
import globalStyles from '../styles';

const baseStyles = StyleSheet.create({
  ...globalStyles,
  wrapper: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  container: {
    backgroundColor: '#ffffff',
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingBottom: 15,
    marginBottom: 30,
    elevation: 10,
  },
  input: {
    backgroundColor: "#ffffff",
    width: '85%',
    height: 40,
    borderColor: '#f2f2f2',
    borderWidth: 2,
    marginTop: 20,
    paddingLeft: 15,
    color: '#424242',
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    width: '85%',
    height: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  appButton: {
    width: '85%',
    height: 40,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    color: '#000000',
  },
  text: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
  appText: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
  },
  load: {
    position: 'absolute',
    opacity: 0.8,
  },
  loadContainer: {
    position: 'relative',
    marginTop: 15,
    transform: [{translateX: -20}]
  }
});

export default baseStyles;
