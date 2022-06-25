import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export default {
  light: {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      background: '#f9f9f9',
      primary: '#2fc18c',
      secondary: '#003be5',
      surfaceVariant: '#e7e0ec',
      successContainer: '#2e7d32',
      errorContainer: '#d32f2f',
      onPrimary: '#ffffff',
      onSecondary: '#ffffff',
      onSurface: '#3d495c',
      onErrorContainer: '#ffffff',
      onSuccessContainer: '#ffffff',
      outline: '#3d495c',
    },
  },
  dark: {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#2fc18c',
      secondary: '#003be5',
      surfaceVariant: '#49454f',
      errorContainer: '#f44336',
      successContainer: '#66bb6a',
      onPrimary: '#ffffff',
      onSecondary: '#ffffff',
      onSurface: '#f0f6ff',
      onErrorContainer: '#ffffff',
      onSuccessContainer: '#ffffff',
      outline: '#f0f6ff',
    },
  },
}
