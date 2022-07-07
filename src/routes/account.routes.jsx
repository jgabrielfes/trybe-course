import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Appbar as PAppbar, useTheme } from 'react-native-paper';
import { EditAccount } from '../screens/EditAccount';

const Stack = createStackNavigator();

export function AccountRoutes() {
  const { goBack } = useNavigation();
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen
        name="editAccount"
        component={EditAccount}
        options={{
          ...TransitionPresets.ModalPresentationIOS,
          headerBackVisible: false,
          headerDisablePaddingTop: true,
          headerLeft: () => (
            <PAppbar.Action
              iconColor={colors.primary}
              isLeading
              icon="close"
              onPress={goBack}
            />
          ),
        }}
      />
    </>
  );
}
