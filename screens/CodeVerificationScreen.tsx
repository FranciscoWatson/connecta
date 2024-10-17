import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


type StackParamList = {
    SplashScreen: undefined;
    WelcomeScreen: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    CodeVerification: undefined;
    NewPassword: undefined;
  };

type CodeVerificationdNavigationProp = NativeStackNavigationProp<StackParamList, 'CodeVerification'>;


const CodeVerificationScreen: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const { colors } = useTheme();
  const navigation = useNavigation<CodeVerificationdNavigationProp>()

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Cambiar el foco al siguiente campo
    if (text && index < 5) {
      const nextInput = `input${index + 1}`;
      (inputsRefs[nextInput] as any)?.focus();
    }
  };

  // Referencias para los TextInputs
  const inputsRefs: { [key: string]: TextInput | null } = {};

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor:colors.bar,
    },
    title: {
        fontSize: 38,
        color: colors.text,
        fontWeight: 'bold',
        textAlign: 'left',
        width: 370,
        height: 88,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: colors.text,
        textAlign: 'left',
        width: 370,
        marginBottom: 40,
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 370,
        marginBottom: 30,
    },
    codeInput: {
        width: 50,
        height: 55,
        borderWidth: 1,
        borderColor: colors.border_input,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
    },
    submitButton: {
        backgroundColor: colors.accent,
        width: 357,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginBottom: 20,
    },
    submitButtonText: {
        color: colors.text_button,
        fontSize: 18,
        fontWeight: 'bold',
    },
    resendCodeText: {
        color: '#289BF6',
        fontSize: 16,
        marginTop: 10,
    },
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>Enter code that we have sent to your email joh...@gmail.com</Text>
      <View style={styles.codeInputContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputsRefs[`input${index}`] = ref)}
            value={value}
            onChangeText={(text) => handleChangeText(text, index)}
            maxLength={1}
            keyboardType="number-pad"
            style={styles.codeInput}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('NewPassword')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.resendCodeText}>Resend code</Text>
      </TouchableOpacity>
    </View>
  );
};



export default CodeVerificationScreen;
