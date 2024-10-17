import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Routes from '../navigation/Routes';

const ForgotPasswordScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Forgot your password?</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.accent, color: colors.text }]}
        placeholder="Email"
        placeholderTextColor={colors.text}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate(Routes.CodeVerificationScreen)}>
        <Text style={[styles.buttonText, { color: colors.text }]}>Send recovery code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40 },
  input: { width: '100%', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
  button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});

export default ForgotPasswordScreen;
