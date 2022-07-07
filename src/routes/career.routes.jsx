import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Career } from '../screens/Career';

const Stack = createStackNavigator();

export function CareerRoutes() {
  return (
    <>
      <Stack.Screen name="career" component={Career} />
    </>
  );
}
