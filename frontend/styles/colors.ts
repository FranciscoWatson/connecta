// src/styles/colors.ts

export const LightModeColors = {
  primary: '#22577A',  // Main blue
  secondary: '#38A3A5',  // Teal
  accent: '#57CC99',  // Light green
  midAccent: '#80ED99',  // Bright green
  lightAccent: '#C7F9CC',  // Light mint
  text: '#141414',  // Black text
  textsfirstsscreens: '#F0F0F0', // Splash Screen White Text
  background: '#F0F0F0', // White background for Light Mode
};

export const DarkModeColors = {
  primary: '#1B4F72',  // Azul más oscuro basado en el primary de Light Mode, para que contraste bien con el fondo oscuro
  secondary: '#276F6B',  // Teal más oscuro y apagado para que mantenga la "onda" pero no sea demasiado brillante
  accent: '#459C76',  // Verde más oscuro pero manteniendo el estilo del Light Mode
  midAccent: '#4DAD83',  // Verde algo más oscuro pero no pierde su brillo
  lightAccent: '#6EBF91',  // Verde mint ligeramente más oscuro para armonizar con el fondo negro
  text: '#E0E0E0',  // Texto blanco o gris claro para mejorar la legibilidad en el fondo oscuro
  textsplash: '#E0E0E0',  // Texto blanco o gris claro en la Splash Screen
  background: '#141414',  // Fondo negro suave para el modo oscuro
};

export const BlackWhiteColors = {
  black: '#141414',  // Pure black for universal use
  white: '#F0F0F0',  // Pure white for universal use
};
