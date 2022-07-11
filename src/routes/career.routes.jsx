import React, { useState } from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { HiringPartners } from '../screens/HiringPartners';
import { Company } from '../screens/Company';

const Stack = createStackNavigator();

export function CareerRoutes() {
  const { colors } = useTheme();
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <>
      <Stack.Screen
        name="hiringPartners"
        options={{
          headerTitle: 'Empresas',
          headerRight: () => (
            <Appbar.Action
              icon={showSearchbar ? 'close' : 'magnify'}
              iconColor={colors.primary}
              onPress={() => setShowSearchbar(!showSearchbar)}
            />
          ),
        }}
      >
        {props => (
          <HiringPartners
            {...props}
            showSearchbar={showSearchbar}
            setSearchbarOpen={value => setShowSearchbar(value)}
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="companyDetails" component={Company} />
    </>
  );
}
