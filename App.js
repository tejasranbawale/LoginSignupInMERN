import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

const App = () => {
  return (
    <View>
      {/* <Login /> */}
      <Signup />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
