import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export default {
  light: {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      background: '#f9f9f9',
      accent: '#42197f',
      primary: '#2fc18c',
      primaryContainer: '#e9e3f1',
      secondary: '#003be5',
      tertiary: '#036b52',
      surfaceVariant: '#e7e0ec',
      successContainer: '#2e7d32',
      errorContainer: '#d32f2f',
      onBackground: '#000000',
      onPrimary: '#ffffff',
      onPrimaryContainer: '#003be5',
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
      background: '#1c1b1f',
      accent: '#42197f',
      primary: '#2fc18c',
      primaryContainer: '#003be5',
      secondary: '#003be5',
      tertiary: '#2fc18c',
      surfaceVariant: '#49454f',
      errorContainer: '#f44336',
      successContainer: '#66bb6a',
      onBackground: '#ffffff',
      onPrimary: '#ffffff',
      onPrimaryContainer: '#ffffff',
      onSecondary: '#ffffff',
      onSurface: '#f0f6ff',
      onErrorContainer: '#ffffff',
      onSuccessContainer: '#ffffff',
      outline: '#f0f6ff',
    },
  },
}
