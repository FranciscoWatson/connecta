import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import LightModeColors from '../styles/colors';
import { BlackWhiteColors } from '../styles/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
    SplashScreen: undefined;
    WelcomeScreen: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
  };

  type WelcomeScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'WelcomeScreen'>;

const WelcomeScreen = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>()

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={BlackWhiteColors.white} barStyle="dark-content" />
      <Image
        source={require('../assets/images/connecta-logo.png')} 
        style={styles.logo}
      />
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton}onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BlackWhiteColors.white,
  },
  logo: {
    width: 378,
    height: 277,
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: LightModeColors.accent,
    width: 357,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 15,
  },
  signupButton: {
    backgroundColor: LightModeColors.primary,
    width: 357,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
