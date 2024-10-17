import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes';

const NewPasswordScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Navegar primero a PasswordChangedScreen
    navigation.navigate(Routes.PasswordChangedScreen);

    // Después de un pequeño delay, navegar de vuelta al LoginScreen
    setTimeout(() => {
      navigation.navigate(Routes.LoginScreen);
    }, 1500); // Ajusta el tiempo según prefieras
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Enter your new password</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.accent, color: colors.text }]}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={colors.text}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.accent, color: colors.text }]}
        placeholder="Confirm password"
        secureTextEntry
        placeholderTextColor={colors.text}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>Submit</Text>
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

export default NewPasswordScreen;
