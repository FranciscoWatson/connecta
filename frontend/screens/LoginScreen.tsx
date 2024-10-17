import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes';
import { useTheme } from '../context/ThemeContext';

const LoginScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require('../assets/images/connecta-logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.accent, color: colors.text }]}
        placeholder="Email"
        placeholderTextColor={colors.text}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.accent, color: colors.text }]}
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate(Routes.ForgotPasswordScreen)}>
        <Text style={[styles.forgotPassword, { color: colors.primary }]}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.primary }]}>
        <Text style={[styles.buttonText, { color: colors.text }]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.googleButton]}>
        <Text style={[styles.googleText]}>Sign in with Google</Text>
      </TouchableOpacity>
      <Text style={[styles.signUpText, { color: colors.text }]}>
        Don't have an account?{' '}
        <Text style={{ color: colors.primary }} onPress={() => navigation.navigate(Routes.SignUpScreen)}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 150, height: 150, marginBottom: 40 },
  input: { width: '100%', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
  forgotPassword: { textAlign: 'right', marginBottom: 20 },
  button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
  googleButton: { width: '100%', padding: 15, borderColor: '#DB4437', borderWidth: 1, borderRadius: 10, marginBottom: 20, alignItems: 'center' },
  googleText: { fontSize: 18, fontWeight: 'bold', color: '#DB4437' },
  signUpText: { fontSize: 16, marginTop: 20 },
});

export default LoginScreen;
