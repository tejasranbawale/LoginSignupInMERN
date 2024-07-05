import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import bg from '../../assets/bg.jpg';
import welcomelogo from '../../assets/logo2.png';
import {button1} from '../common/button';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.bg} source={bg} />
      <View style={styles.container1}>
        <Image style={styles.logo} source={welcomelogo} />
        <Text style={button1} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
        <Text style={button1} onPress={() => navigation.navigate('SignUp')}>
          SignUp
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 15,
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: '#fff',
  },
  logo: {
    height: 120,
    // width: 180,
    resizeMode: 'contain',
    marginBottom: 50,
    // borderRadius: '50%',
  },
});
