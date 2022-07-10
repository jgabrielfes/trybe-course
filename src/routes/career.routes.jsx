import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { HiringPartners } from '../screens/HiringPartners';
import { Company } from '../screens/Company';

const Stack = createStackNavigator();

export function CareerRoutes() {
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen
        name="hiringPartners"
        component={HiringPartners}
        options={{
          headerTitle: 'Empresas',
          headerRight: () => (
            <Appbar.Action
              icon="magnify"
              iconColor={colors.primary}
            />
          ),
        }}
      />

      <Stack.Screen name="companyDetails" component={Company} />
    </>
  );
}
