import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ConnectedRoutes } from './connected.routes';
import { DisconnectedRoutes } from './disconnected.routes';
import themes from '../theme';
import { setTheme, setUser } from '../store/reducers/configs';


export function Routes() {
  const dispatch = useDispatch();
  const { theme, user } = useSelector(state => state.configs);
  const [loading, setLoading] = useState(true);
  const colorScheme = useColorScheme();

  useEffect(() => {
    async function load() {
      const [user, theme] = await Promise.all([
        AsyncStorage.getItem('user'),
        AsyncStorage.getItem('theme'),
      ]);
      dispatch(setUser(JSON.parse(user)));
      dispatch(setTheme(theme || colorScheme));
      setLoading(false);
    }
    load();
  }, [])

  if (loading) return null;

  return (
    <StyledProvider theme={themes[theme]}>
      <PaperProvider theme={themes[theme]}>
        <SafeAreaProvider>
          <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
          <NavigationContainer>
            {!!user ? (
              <ConnectedRoutes />
            ) : (
              <DisconnectedRoutes />
            )}
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </StyledProvider>
  );
}
