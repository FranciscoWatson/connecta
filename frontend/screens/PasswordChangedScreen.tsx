import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigation/Routes';
import { useTheme } from '../context/ThemeContext';

const PasswordChangedScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleReturnToLogin = () => {
    navigation.navigate(Routes.LoginScreen);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.card}>
        <Text style={[styles.successText, { color: colors.text }]}>Your password has been changed successfully</Text>
        <Button title="Return to Login" onPress={handleReturnToLogin} color={colors.accent} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  successText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default PasswordChangedScreen;
