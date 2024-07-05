import {StyleSheet, Text, Image, View, TextInput} from 'react-native';
import React from 'react';
import bg from '../../assets/bg.jpg';
import welcomelogo from '../../assets/logo2.png';
import {button1} from '../common/button';
import {
  formGroup,
  head1,
  head2,
  input,
  label,
  link,
  link2,
} from '../common/formcss';

const Login = () => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.bg} source={bg} />
        <View style={styles.container1}>
          <View style={styles.s1}>
            <Image style={styles.logo} source={welcomelogo} />
          </View>
          <View style={styles.s2}>
            <Text style={head1}>Login</Text>
            <Text style={head2}>Sign in to continue</Text>
            <View style={formGroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input} />
            </View>
            <View style={styles.formGroup}>
              <Text style={label}>Password</Text>
              <TextInput style={input} />
            </View>
            <View style={styles.fp}>
              <Text style={link}>Forgot Password</Text>
            </View>
            <Text style={button1}>Login</Text>
            <Text style={link2}>
              Don't have an Account?
              <Text style={link}> Create a New Account</Text>{' '}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;

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

  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 220,
    height: 120,
    // borderRadius: '50%',
  },
  s1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '53%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
