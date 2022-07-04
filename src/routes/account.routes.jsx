import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useTheme } from 'react-native-paper';
import { Appbar } from '../components/Appbar';
import { Account } from '../screens/Account';

const Stack = createStackNavigator();

export function AccountRoutes() {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="account"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        cardShadowEnabled: true,
        cardStyle: { backgroundColor: colors.background },
        detachPreviousScreen: false,
        gestureResponseDistance: width,
        header: props => <Appbar {...props} iconColor={colors.primary} />,
      }}
    >
      <Stack.Screen name="account" component={Account} />
    </Stack.Navigator>
  );
}
