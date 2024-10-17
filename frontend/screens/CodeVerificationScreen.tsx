import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Routes from '../navigation/Routes';

const CodeVerificationScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Enter Verification Code</Text>
      <View style={styles.codeContainer}>
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
        <TextInput style={styles.codeInput} maxLength={1} keyboardType="number-pad" />
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate(Routes.NewPasswordScreen)}>
        <Text style={[styles.buttonText, { color: colors.text }]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40 },
  codeContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 20 },
  codeInput: { width: 50, height: 50, borderWidth: 1, textAlign: 'center', fontSize: 24 },
  button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
});

export default CodeVerificationScreen;
