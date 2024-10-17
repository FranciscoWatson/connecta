import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp} from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Routes, { RootStackParamList } from '../navigation/Routes';

const ForgotPasswordScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Forgot your password?</Text>
      <TextInput
        style={[styles.input, {backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
        placeholder="Email"
        placeholderTextColor={colors.text}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primaryColor }]}
        onPress={() => navigation.navigate(Routes.CodeVerificationScreen)}>
        <Text style={[styles.buttonText, { color: colors.textOnPrimary }]}>Send recovery code</Text>
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
