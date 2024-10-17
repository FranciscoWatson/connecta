import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes';
import { useTheme } from '../context/ThemeContext';

const VerificationScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSubmitCode = () => {
    navigation.navigate(Routes.NewPasswordScreen);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Enter Verification Code</Text>
      <TextInput placeholder="Code" style={styles.input} keyboardType="numeric" maxLength={6} />
      <Button title="Submit" onPress={handleSubmitCode} color={colors.accent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default VerificationScreen;
