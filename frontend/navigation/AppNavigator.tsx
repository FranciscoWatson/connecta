import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginStack from './LoginStack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Routes from './Routes';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { useTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName={Routes.SplashScreen}>
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen 
  name="SignUpScreen" 
  component={SignUpScreen} 
  options={{
    headerShown: true,
    headerTitle: '',
    headerTransparent: true,  // Para que el fondo sea transparente y esté debajo de la barra de estado
    headerBackTitleVisible: false,  // Oculta el texto "Back"
    headerStyle: {
      backgroundColor: 'transparent', // Mantén el fondo transparente
    },
    headerTintColor: colors.text,  // Color del ícono de la flecha
  }} 
/>
    </Stack.Navigator>
  );
};

export default AppNavigator;
