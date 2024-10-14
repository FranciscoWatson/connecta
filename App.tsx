import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
