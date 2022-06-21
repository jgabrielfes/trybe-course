import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DisconnectedRoutes } from './disconnected.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <DisconnectedRoutes />
    </NavigationContainer>
  );
}
