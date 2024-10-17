import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import PasswordChangedScreen from '../screens/PasswordChangedScreen';
import CodeVerificationScreen from '../screens/CodeVerificationScreen';
import Routes from './Routes';
import { useTheme } from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

const LoginStack: React.FC = () => {
    const { colors } = useTheme(); // Accedemos a los colores del tema

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
          headerStyle: {
            backgroundColor: colors.primary, // Color de fondo del header
          },
          headerTintColor: colors.textsfirstsscreens, // Color del texto y los íconos del header
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo del título
          },
        }}
      />
      <Stack.Screen 
        name={Routes.CodeVerificationScreen} 
        component={CodeVerificationScreen}
        options={{
            title: 'Code Verification',
            headerStyle: {
              backgroundColor: colors.primary, // Color de fondo del header
            },
            headerTintColor: colors.textsfirstsscreens, // Color del texto y los íconos del header
            headerTitleStyle: {
              fontWeight: 'bold', // Estilo del título
            },
          }}
      />
      <Stack.Screen 
        name={Routes.NewPasswordScreen} 
        component={NewPasswordScreen} 
        options={{ title: 'New Password' 
            ,headerStyle: {
            backgroundColor: colors.primary, // Color de fondo del header
          },
          headerTintColor: colors.textsfirstsscreens, // Color del texto y los íconos del header
          headerTitleStyle: {
            fontWeight: 'bold', // Estilo del título
          }, }} 
      />
      <Stack.Screen 
        name={Routes.PasswordChangedScreen} 
        component={PasswordChangedScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
