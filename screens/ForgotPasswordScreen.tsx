import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type StackParamList = {
  SplashScreen: undefined;
  WelcomeScreen: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  CodeVerification: undefined;
};

type ForgotPasswordNavigationProp = NativeStackNavigationProp<StackParamList, 'ForgotPassword'>;


const ForgotPasswordScreen: React.FC = () => {
const navigation = useNavigation<ForgotPasswordNavigationProp>()
const { colors } = useTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.bar,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    width: 324,
    height: 88,
    color: colors.text,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    width: 357,
    height: 54,
    borderColor: colors.border_input,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  recoveryButton: {
    backgroundColor: colors.accent,
    width: 357,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  recoveryButtonText: {
    color: colors.text_button,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Forgot your password?</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={colors.text}
        style={styles.input}
      />
      <TouchableOpacity style={styles.recoveryButton} onPress={() => navigation.navigate('CodeVerification')}>
        <Text style={styles.recoveryButtonText}>Send recovery code</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ForgotPasswordScreen;
