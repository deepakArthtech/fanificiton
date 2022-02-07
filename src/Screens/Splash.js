import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

function Splash({navigation}) {
  setTimeout(function () {
    navigation.reset({
      index: 0,
      routes: [{name: 'TypeScreen'}],
    });
  }, 3000);

  return (
    <Image
      source={require('../asserts/splash_screen.png')}
      style={styles.backgroundImage}
    />
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default Splash;
