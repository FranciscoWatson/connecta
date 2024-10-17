import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
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
    const { colors } = useTheme();
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bar,
      },
      logo: {
        width: 378,
        height: 277,
        marginBottom: 40,
      },
      loginButton: {
        backgroundColor: colors.accent,
        width: 357,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 15,
      },
      signupButton: {
        backgroundColor: colors.primary,
        width: 357,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
      },
      loginText: {
        color: colors.text_button,
        fontSize: 20,
        fontWeight: 'bold',
      },
      signupText: {
        color: colors.text_button,
        fontSize: 20,
        fontWeight: 'bold',
      },
    });
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.bar} barStyle="light-content" />
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



export default WelcomeScreen;
