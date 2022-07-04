import React from 'react';
import { useDispatch } from 'react-redux';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Appbar as PAppbar, useTheme } from 'react-native-paper';
import { Appbar } from '../components/Appbar';
import { Signin } from '../screens/Signin';
import { Signup } from '../screens/Signup';
import { ForgotPassword } from '../screens/ForgotPassword';
import { doChangeTheme } from '../store/reducers/configs';

const Stack = createStackNavigator();

export function DisconnectedRoutes({ theme }) {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="signin"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        cardShadowEnabled: true,
        cardStyle: { backgroundColor: colors.background },
        detachPreviousScreen: false,
        gestureResponseDistance: width,
        header: props => <Appbar {...props} iconColor={colors.primary} />,
        headerRight: () => (
          <PAppbar.Action
            iconColor={colors.primary}
            icon={`brightness-${theme === 'light' ? 4 : 7}`}
            onPress={() => dispatch(doChangeTheme())}
          />
        ),
      }}
    >
      <Stack.Screen name="signin" component={Signin} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
