import React from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as StyledProvider } from 'styled-components';
import themes from './src/theme';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <StyledProvider theme={themes[colorScheme]}>
      <PaperProvider theme={themes[colorScheme]}>
        <StatusBar style="auto" />
        <Routes />
      </PaperProvider>
    </StyledProvider>
  );
}
