import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LightModeColors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlackWhiteColors } from '../styles/colors';

const ForgotPasswordScreen: React.FC = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color={LightModeColors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Forgot your password?</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={LightModeColors.text}
        style={styles.input}
      />
      <TouchableOpacity style={styles.recoveryButton}>
        <Text style={styles.recoveryButtonText}>Send recovery code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: BlackWhiteColors.white,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    width: 324,
    height: 88,
    color: LightModeColors.text,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    width: 357,
    height: 54,
    borderColor: BlackWhiteColors.black,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  recoveryButton: {
    backgroundColor: LightModeColors.accent,
    width: 357,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  recoveryButtonText: {
    color: BlackWhiteColors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
