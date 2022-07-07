import React, { useCallback, useState } from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomNavigation, useTheme } from 'react-native-paper';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Appbar } from '../components/Appbar';
import { Course } from '../screens/Course';
import { CourseRoutes } from './course.routes';
import { Career } from '../screens/Career';
import { CareerRoutes } from './career.routes';
import { MSC } from '../screens/MSC';
import { MSCRoutes } from './msc.routes';
import { Account } from '../screens/Account';
import { AccountRoutes } from './account.routes';
import { LogoImage } from '../assets/logo';

const Stack = createStackNavigator();

export function ConnectedRoutes() {
  const { width } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'course', title: 'Curso',
      focusedIcon: props => <LogoImage {...props} height={24} width={21} />,
      unfocusedIcon: props => <LogoImage {...props} height={24} width={21} />,
    },
    { key: 'career', title: 'Carreira', focusedIcon: 'compass', unfocusedIcon: 'compass-outline' },
    { key: 'msc', title: 'MSC', focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline' },
    { key: 'account', title: 'Conta', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderTouchable = useCallback(props => (
    <TouchableOpacity
      {...props}
      style={[...props.style, {
        marginTop: -4,
        height: 68,
      }]}
    />
  ), []);

  const scene = useCallback(screen => props => {
    if (routes[index].key !== props.route.key) return null;
    return screen(props);
  }, [index]);

  const renderScene = BottomNavigation.SceneMap({
    course: scene(Course),
    career: scene(Career),
    msc: scene(MSC),
    account: scene(Account),
  });

  return (
    <Stack.Navigator
      initialRouteName="connected"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        cardShadowEnabled: true,
        cardStyle: { backgroundColor: colors.background, borderBottomWidth: bottom, borderColor: colors.primary + 14 },
        detachPreviousScreen: false,
        gestureResponseDistance: width,
        header: props => <Appbar {...props} iconColor={colors.primary} />,
      }}
    >
      <Stack.Screen
        name="connected"
        options={{ cardStyle: { backgroundColor: colors.background } }}
      >
        {() => (
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderTouchable={renderTouchable}
            renderScene={renderScene}
            inactiveColor={colors.onSurface + '80'}
            activeColor="#fff"
            shifting
            keyboardHidesNavigationBar={false}
            theme={{ colors: { secondaryContainer: colors.primary, surface: colors.primary + '14' } }}
          />
        )}
      </Stack.Screen>
      {CourseRoutes()}
      {CareerRoutes()}
      {MSCRoutes()}
      {AccountRoutes()}
    </Stack.Navigator>
  );
}
