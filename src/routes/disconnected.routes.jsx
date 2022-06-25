import React from 'react';
import { useDispatch } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar as PAppbar } from 'react-native-paper';
import { Appbar } from '../components/Appbar';
import { Signin } from '../screens/Signin';
import { Signup } from '../screens/Signup';
import { ForgotPassword } from '../screens/ForgotPassword';
import { doChangeTheme } from '../store/reducers/configs';

const Stack = createNativeStackNavigator();

export function DisconnectedRoutes({ theme, colors }) {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      screenOptions={{
        fullScreenGestureEnabled: true,
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
