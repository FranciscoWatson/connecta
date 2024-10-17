import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import CodeVerificationScreen from '../screens/CodeVerificationScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SplashScreen}>
      <Stack.Screen
        name={Routes.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.WelcomeScreen}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SignUp}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.ForgotPassword}
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CodeVerification}
        component={CodeVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.NewPassword}
        component={NewPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
