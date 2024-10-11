import React, {createContext, useContext, useMemo} from 'react';
import {useColorScheme} from 'react-native';
import {LightModeColors, DarkModeColors} from '../styles/colors';

const ThemeContext = createContext({ colors: LightModeColors });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const themeContextValue = useMemo(() => {
    const colors = isDarkMode ? DarkModeColors : LightModeColors;
    return { colors };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

