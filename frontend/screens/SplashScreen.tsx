import React from 'react';
import { View, Image, StyleSheet, StatusBar, Text} from 'react-native';
import { deviceWidth, deviceHeight } from '../utils/dimensions';
import { useTheme } from '../context/ThemeContext';

const SplashScreen: React.FC = () => {
    const { colors } = useTheme();

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <View style={[styles.container, { backgroundColor: colors.primary }]}>
                <Image source={require('../assets/images/connecta-logo.png')} style={styles.logo} />
                <Text style={styles.title}>connecta</Text>
            </View>
        </>
        
    )
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
        color: '#ffffff',
        textTransform: 'lowercase',
      },
  });

export default SplashScreen;
