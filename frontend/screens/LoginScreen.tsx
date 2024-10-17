import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes';
import { useTheme } from '../context/ThemeContext';

const LoginScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require('../assets/images/connecta-logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2}]}
        placeholder="Email"
        placeholderTextColor={colors.text}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2}]}
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry
      />
      <TouchableOpacity onPress={() => navigation.navigate(Routes.ForgotPasswordScreen)}>
        <Text style={[styles.forgotPassword, { color: colors.text }]}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors.accent }]}>
        <Text style={[styles.buttonText, { color: colors.textsfirstsscreens }]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/images/google-logo.png')} // Aquí carga el logo de Google
          style={styles.googleLogo}
        />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
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
  forgotPassword: { textAlign: 'right', marginBottom: 20 },
  button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },
  signUpText: { fontSize: 16, marginTop: 20 },
  googleButton: {
    flexDirection: 'row', // Para alinear el logo y el texto
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D1D1', // Borde gris claro para el botón
    borderRadius: 10, // Bordes redondeados
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 20,
  },
  googleLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', // Texto negro
  },
});

export default LoginScreen;
