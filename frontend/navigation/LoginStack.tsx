import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import CodeVerificationScreen from '../screens/CodeVerificationScreen';
import Routes from './Routes';
import { useTheme } from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

const LoginStack: React.FC = () => {
    const { colors } = useTheme(); // Accedemos a los colores del tema

  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
        headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text, // Color for header icons and back arrow
          headerTitleAlign: 'center', // Modern centered title
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
          },
      }}>
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
        }}
      />
      <Stack.Screen 
        name={Routes.CodeVerificationScreen} 
        component={CodeVerificationScreen}
        options={{
            title: 'Code Verification',
          }}
      />
      <Stack.Screen 
        name={Routes.NewPasswordScreen} 
        component={NewPasswordScreen} 
        options={{ title: 'New Password'}} 
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
