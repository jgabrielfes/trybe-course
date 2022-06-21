import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from '../components/Appbar';
import { Signin } from '../screens/Signin';

const Stack = createNativeStackNavigator();

export function DisconnectedRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Appbar,
      }}
    >
      <Stack.Screen name="signin" component={Signin} />
    </Stack.Navigator>
  );
}
