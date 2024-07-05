import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import bg from '../../assets/bg.jpg';
import welcomelogo from '../../assets/logo2.png';
import {button1} from '../common/button';
import {
  formGroup,
  head1,
  head2,
  input,
  input1,
  label,
  link,
  link2,
} from '../common/formcss';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.bg} source={bg} />
      <View style={styles.container1}>
        <View style={styles.s1}>
          <Image style={styles.logo} source={welcomelogo} />
        </View>
        <View style={styles.s2}>
          <Text style={head1}>Create a New Account</Text>
          <Text style={link2}>
            Already have an Account?
            <Text style={link} onPress={() => navigation.navigate('Login')}>
              {' '}
              Login here
            </Text>
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={formGroup}>
              <Text style={label}>Name</Text>
              <TextInput style={input} placeholder="Enter Your Name" />
            </View>
            <View style={formGroup}>
              <Text style={label}>Email</Text>
              <TextInput style={input} placeholder="Enter Your Email" />
            </View>
            <View style={formGroup}>
              <Text style={label}>DOB</Text>
              <TextInput style={input} placeholder="Date of Birth" />
            </View>
            <View style={formGroup}>
              <Text style={label}>Password</Text>
              <TextInput style={input} placeholder="Enter Password" />
            </View>
            <View style={formGroup}>
              <Text style={label}>Confirm Password</Text>
              <TextInput style={input} placeholder="Confirm Password" />
            </View>
            <View style={formGroup}>
              <Text style={label}>Adderss</Text>
              <TextInput style={input1} placeholder="Enter Your Address" />
            </View>
          </ScrollView>
          <Text style={button1}>SignUp</Text>
        </View>
      </View>
    </View>
  );
};

export default Signup;

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
    width: 120,
    height: 60,
    // borderRadius: '50%',
  },
  s1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
    height: '10%',
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
});
