import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar, Text } from 'react-native';
import { deviceWidth, deviceHeight } from '../utils/dimensions';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native'; // Para la navegación
import Routes from '../navigation/Routes'; // Importa las rutas

const SplashScreen: React.FC = () => {
    const { colors } = useTheme();
    const navigation = useNavigation(); // Hook para navegar

    useEffect(() => {
        // Navega a la WelcomeScreen después de 3 segundos
        const timer = setTimeout(() => {
            navigation.navigate(Routes.WelcomeScreen);
        }, 3000);

        // Limpia el timeout si el componente se desmonta
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <View style={[styles.container, { backgroundColor: colors.primary }]}>
                <Image source={require('../assets/images/connecta-logo.png')} style={styles.logo} />
                <Text style={[styles.title, { color: colors.textsfirstsscreens }]}>connecta</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        height: deviceHeight,
    },
    logo: {
        width: deviceWidth * 0.8,
        height: deviceWidth * 0.8,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        textTransform: 'lowercase',
    },
});

export default SplashScreen;
