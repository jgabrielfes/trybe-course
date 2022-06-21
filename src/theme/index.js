import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export default {
  light: {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      background: '#f9f9f9',
      primary: '#2fc18c',
      secondary: '#003be5',
      onPrimary: '#ffffff',
      onSecondary: '#ffffff',
      // onBackground: '#3d495c',
      onSurface: '#3d495c',
    },
  },
  dark: {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#2fc18c',
      secondary: '#003be5',
      onPrimary: '#ffffff',
      onSecondary: '#ffffff',
      onSurface: '#deebff',
    },
  },
}
