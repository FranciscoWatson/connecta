import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LightModeColors from '../styles/colors';
import { BlackWhiteColors } from '../styles/colors';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/connecta-logo.png')}
        style={styles.logo}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor={LightModeColors.text}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor={LightModeColors.text}
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowPassword(prevState => !prevState)}
        >
          <Icon
            name={showPassword ? 'visibility' : 'visibility-off'}
            size={28}
            color={LightModeColors.text}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>or</Text>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
        <Text style={styles.signupText}>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupLink}>Sign up</Text>
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
    width: 225,
    height: 167,
    marginBottom: 10,
  },
  input: {
    width: 357,
    height: 55,
    borderColor: BlackWhiteColors.black,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    color: LightModeColors.text,
    marginBottom: 20,
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
  loginButtonText: {
    color: BlackWhiteColors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  orText: {
    color: LightModeColors.text,
    marginVertical: 10,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BlackWhiteColors.black,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  googleButtonText: {
    color: LightModeColors.text,
    fontSize: 16,
    marginLeft: 10,
  },
  signupText: {
    color: LightModeColors.text,
    marginTop: 20,
    fontSize: 19,
  },
  signupLink: {
    color: BlackWhiteColors.black,
    fontWeight: 'bold',
    fontSize:19,
  },
  passwordContainer: {
    width: 357,
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: BlackWhiteColors.black,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  iconContainer: {
    padding: 8,
  },
});

export default LoginScreen;
