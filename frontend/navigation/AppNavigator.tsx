import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerificationScreen from '../screens/VerificationScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen' ;
import PasswordChangedScreen from '../screens/PasswordChangedScreen';
import CodeVerificationScreen from '../screens/CodeVerificationScreen';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SplashScreen}>
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.WelcomeScreen} component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} options={{ title: 'Login' }} />
      <Stack.Screen name={Routes.ForgotPasswordScreen} component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
      <Stack.Screen name={Routes.CodeVerificationScreen} component={CodeVerificationScreen} />
      <Stack.Screen name={Routes.VerificationScreen} component={VerificationScreen} options={{ title: 'Verification Code' }} />
      <Stack.Screen name={Routes.NewPasswordScreen} component={NewPasswordScreen} options={{ title: 'New Password' }} />
      <Stack.Screen name={Routes.PasswordChangedScreen} component={PasswordChangedScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
