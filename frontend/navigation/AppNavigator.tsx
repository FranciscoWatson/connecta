import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginStack from './LoginStack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Routes from './Routes';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SplashScreen}>
      <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
