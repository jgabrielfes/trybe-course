import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { ConnectedRoutes } from './connected.routes';
import { DisconnectedRoutes } from './disconnected.routes';
import themes from '../theme';
import { setTheme } from '../store/reducers/configs';

export function Routes() {
  const dispatch = useDispatch();
  const { theme, user } = useSelector(state => state.configs);
  const colorScheme = useColorScheme();

  useEffect(() => {
    dispatch(setTheme(colorScheme));
  }, [])

  if (!theme) return null;

  return (
    <StyledProvider theme={themes[theme]}>
      <PaperProvider theme={themes[theme]}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
        <NavigationContainer>
          {!!user ? (
            <ConnectedRoutes colors={themes[theme].colors} />
          ) : (
            <DisconnectedRoutes theme={theme} colors={themes[theme].colors} />
          )}
        </NavigationContainer>
      </PaperProvider>
    </StyledProvider>
  );
}
