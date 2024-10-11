import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { ThemeProvider } from './context/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <SplashScreen />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
