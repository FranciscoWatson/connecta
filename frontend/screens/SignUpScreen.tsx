import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Routes, { RootStackParamList } from '../navigation/Routes';


const SignUpScreen: React.FC = () => {
    const { colors } = useTheme();
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Image source={require('../assets/images/connecta-logo.png')} style={styles.logo} />
        <TextInput
            style={[styles.input, {backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
            placeholder="Email"
            placeholderTextColor={colors.text}
        />
        <TextInput
            style={[styles.input, {backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
            placeholder="Nickname"
            placeholderTextColor={colors.text}
        />
        <TextInput
            style={[styles.input, {backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor={colors.text}
        />
        <TextInput
            style={[styles.input, {backgroundColor: colors.background, color: colors.text, borderColor: colors.text, borderWidth: 2 }]}
            placeholder="Confirm password"
            secureTextEntry
            placeholderTextColor={colors.text}
        />
        <TouchableOpacity onPress={() => navigation.navigate(Routes.HomeScreen) }style={[styles.button, { backgroundColor: colors.primaryColor }]}>
            <Text style={[styles.buttonText, { color: colors.textOnPrimary }] }>Complete Registration</Text>
        </TouchableOpacity>
        </View>
        </>
    );
    };

    const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    logo: { width: 200, height: 200, marginBottom: 10 }, // Cambia el tamaño según sea necesario
    input: { width: '100%', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
    button: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
    buttonText: { fontSize: 18, fontWeight: 'bold' },
    });

export default SignUpScreen;