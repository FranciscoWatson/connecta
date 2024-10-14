import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import LightModeColors from '../styles/colors';
import { BlackWhiteColors } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={LightModeColors.text} />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/connecta-logo.png')}
        style={styles.logo}
      />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter your Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={LightModeColors.text}
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter your Nickname</Text>
        <TextInput
          placeholder="Nickname"
          placeholderTextColor={LightModeColors.text}
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter your password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={LightModeColors.text}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor={LightModeColors.text}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Complete Registration</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BlackWhiteColors.white,
  },
  logo: {
    width: 225,
    height: 167,
    marginBottom: 20,
  },
  input: {
    width: 357,
    height: 54,
    borderColor: BlackWhiteColors.black,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  registerButton: {
    width: 357,
    height: 64,
    backgroundColor: LightModeColors.accent,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: BlackWhiteColors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputGroup: {
    width: 357,
    marginBottom: 15,
  },
  label: {
    color: LightModeColors.text,
    fontSize: 16,
    marginBottom: 5,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
});

export default SignUpScreen;
