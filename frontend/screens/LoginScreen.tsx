import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes';
import { useTheme } from '../context/ThemeContext';

const LoginScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image
          source={require('../assets/images/connecta-logo.png')}
          style={styles.logo}
        />

        <TextInput
          style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
          placeholder="Email"
          placeholderTextColor={colors.text}
        />

        {/* Campo de contraseña con el ícono personalizado */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput, { backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
            placeholder="Password"
            placeholderTextColor={colors.text}
            secureTextEntry={!showPassword}  // Cambia si la contraseña se muestra o no
          />
          {/* Icono para mostrar/ocultar contraseña */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
            <Image
              source={require('../assets/images/eye-password.png')}
              style={styles.eyeIcon} // Ajustamos el estilo del ícono
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(Routes.ForgotPasswordScreen)} style={styles.forgotPasswordContainer}>
          <Text style={[styles.forgotPassword, { color: colors.text }]}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: colors.primaryColor }]}>
          <Text style={[styles.buttonText, { color: colors.textOnPrimary }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../assets/images/google-logo.png')} // Aquí carga el logo de Google
            style={styles.googleLogo}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Texto "Sign up" */}
        <Text style={[styles.signUpText, { color: colors.text }]}>
          Don't have an account?{' '}
          <Text style={{ color: colors.text }} onPress={() => navigation.navigate(Routes.SignUpScreen)}>
            Sign up
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 150, height: 150, marginBottom: 40 },
  input: { width: '100%', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
  
  passwordContainer: { width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  passwordInput: { flex: 1, paddingRight: 45 },  // Ajusta el padding para que el ícono no cubra el texto
  icon: { position: 'absolute', right: 15 },  // Ícono en la derecha del campo de texto
  
  eyeIcon: { width: 24, height: 24, tintColor: '#A0A0A0' },  // Ajusta el tamaño del ícono y el color si es necesario
  
  forgotPasswordContainer: { alignSelf: 'flex-end', marginBottom: 20 },
  forgotPassword: { textAlign: 'right' },
  
  button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
  
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 20,
  },
  googleLogo: { width: 40, height: 40, marginRight: 10 },
  googleText: { fontSize: 16, fontWeight: 'bold', color: '#000000' },
  
  signUpText: { fontSize: 16, marginTop: 20, textAlign: 'center' },
});

export default LoginScreen;
