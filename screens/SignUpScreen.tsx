import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';



const SignUpScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bar,
    },
    logo: {
      width: 225,
      height: 167,
      marginBottom: 20,
    },
    input: {
      width: 357,
      height: 54,
      borderColor: colors.border_input,
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 15,
      marginBottom: 10,
    },
    registerButton: {
      width: 357,
      height: 64,
      backgroundColor: colors.accent,
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 10,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    registerButtonText: {
      color: colors.text_button,
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputGroup: {
      width: 357,
      marginBottom: 15,
    },
    label: {
      color: colors.text,
      fontSize: 16,
      marginBottom: 5,
    },
    backButton: {
      alignSelf: 'flex-start',
      marginBottom: 20,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Image
        source={require('../assets/images/connecta-logo.png')}
        style={styles.logo}
      />
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter your Email</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.text}
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter your Nickname</Text>
        <TextInput
          placeholder="Nickname"
          placeholderTextColor={colors.text}
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter your password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor={colors.text}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Confirm password"
          placeholderTextColor={colors.text}
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



export default SignUpScreen;
