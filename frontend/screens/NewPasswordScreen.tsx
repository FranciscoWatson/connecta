import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes';
import { BlurView } from '@react-native-community/blur';

const NewPasswordScreen: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [showModal, setShowModal] = React.useState(false); // Estado para controlar la visibilidad del modal

  const handleSubmit = () => {
    // Mostramos el modal primero
    setShowModal(true);

    // Después de un delay, cerramos el modal y navegamos de vuelta al LoginScreen
    setTimeout(() => {
      setShowModal(false);
      navigation.navigate(Routes.LoginScreen);
    }, 1500); // Tiempo del delay
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Enter your new password</Text>
      <TextInput
        style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor={colors.text}
      />
      <TextInput
        style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
        placeholder="Confirm password"
        secureTextEntry
        placeholderTextColor={colors.text}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primaryColor }]}
        onPress={handleSubmit}
      >
        <Text style={[styles.buttonText, { color: colors.textOnPrimary }]}>Submit</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={showModal} animationType="fade">
        <BlurView style={styles.absolute} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white" />
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/images/check-icon.png')} style={styles.checkIcon} />
            <Text style={[styles.modalText, { color: colors.textOnPrimary }]}>Your password has been changed successfully</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 40 },
  input: { width: '100%', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
  button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 20 },
  buttonText: { fontSize: 18, fontWeight: 'bold' },

  // Estilos para el Modal
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#22577A', // Color de fondo del popup (similar al de la imagen)
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: 300,
  },
  checkIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default NewPasswordScreen;
