// src/screens/NewPasswordScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image, Keyboard } from 'react-native';
import { useTheme } from '../context/ThemeContext';


const NewPasswordScreen: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  const handleSubmit = () => {
    if (password && confirmPassword && password === confirmPassword) {
      Keyboard.dismiss();
      setModalVisible(true);
    }
  };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: colors.bar,
    },
    title: {
        fontSize: 40,
        color: colors.text,
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: 357,
        height: 55,
        borderColor: colors.border_input,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    submitButton: {
        backgroundColor: colors.accent,
        width: 357,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 20,
    },
    submitButtonText: {
        color: colors.text_button,
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: 285,
        height: 381,
        backgroundColor: colors.primary,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      checkIcon: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      modalText: {
        color: colors.text_button,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
      },
      okButtonText: {
        color: colors.text_button,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your new password</Text>
      <TextInput
        placeholder="Password"
        placeholderTextColor={colors.text}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        keyboardType="default"
        returnKeyType="next"
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <TextInput
        placeholder="Confirm password"
        placeholderTextColor={colors.text}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      {/* Modal para la alerta */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image
              source={require('../assets/images/check-icon.png')}
              style={styles.checkIcon}
            />
            <Text style={styles.modalText}>Your password has been changed successfully</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default NewPasswordScreen;
