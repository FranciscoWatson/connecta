import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { deviceWidth, deviceHeight } from '../utils/dimensions';
import Routes from '../navigation/Routes';

const WelcomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image source={require('../assets/images/connecta-logo.png')} style={styles.logo} />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.accent }]}
          onPress={() => navigation.navigate(Routes.LoginScreen)}
        >
          <Text style={[styles.buttonText, { color: colors.textsfirstsscreens }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate(Routes.Register)}
        >
          <Text style={[styles.buttonText, { color: colors.textsfirstsscreens }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
  },
  logo: {
    width: deviceWidth * 0.6,
    height: deviceWidth * 0.6,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
