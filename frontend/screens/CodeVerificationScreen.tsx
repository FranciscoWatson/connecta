import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import Routes, { RootStackParamList } from '../navigation/Routes';
import { deviceWidth } from '../utils/dimensions'; // Import the deviceWidth from your utility

const CodeVerificationScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Refs para los seis componentes TextInput
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const handleInputChange = (text: string, index: number) => {
    if (text.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus(); // Ir automáticamente al siguiente input
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current?.focus(); // Moverse al anterior si presiona la tecla de borrar
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Enter Verification Code</Text>

      <Text style={[styles.subText, { color: colors.text }]}>
        Enter the code that we have sent to your email <Text style={{ fontWeight: 'bold' }}>joh...@gmail.com</Text>
      </Text>

      <View style={styles.codeContainer}>
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={[styles.codeInput, { borderColor: colors.text }]}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleInputChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)} // Agregar control para la tecla de borrar
          />
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primaryColor }]}
        onPress={() => navigation.navigate(Routes.NewPasswordScreen)}
      >
        <Text style={[styles.buttonText, { color: colors.textOnPrimary }]}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log('Resend Code')}>
        <Text style={[styles.resendText, { color: colors.accentColor }]}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: deviceWidth * 0.8, // Usar el 80% del ancho de la pantalla para las cajas de entrada
    marginBottom: 20,
  },
  codeInput: {
    width: deviceWidth * 0.12, // Usar el 12% del ancho de la pantalla para cada caja
    height: deviceWidth * 0.12, // Asegurarse de que las cajas sean cuadradas
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5, // Añade espacio entre inputs
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CodeVerificationScreen;
