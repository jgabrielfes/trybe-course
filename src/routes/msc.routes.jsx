import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { MSC } from '../screens/MSC';

const Stack = createStackNavigator();

export function MSCRoutes() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen name="msc" component={MSC} />
    </>
  );
}
