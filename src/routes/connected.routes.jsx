import React, { useState } from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { CourseRoutes } from './course.routes';
import { AccountRoutes } from './account.routes';
import { LogoImage } from '../assets/logo';
import * as Haptics from 'expo-haptics';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export function ConnectedRoutes() {
  const { colors } = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'course', title: 'Curso',
      focusedIcon: props => <LogoImage {...props} height={24} width={21} />,
      unfocusedIcon: props => <LogoImage {...props} height={24} width={21} />
    },
    { key: 'career', title: 'Carreira', focusedIcon: 'compass', unfocusedIcon: 'compass-outline' },
    { key: 'msc', title: 'MSC', focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline' },
    { key: 'account', title: 'Conta', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    course: CourseRoutes,
    career: AlbumsRoute,
    msc: RecentsRoute,
    account: AccountRoutes,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      inactiveColor={colors.onSurface + '80'}
      onTabPress={() => Haptics.selectionAsync()}
      activeColor="#fff"
      shifting
      barStyle={{ backgroundColor: colors.background }}
      theme={{ colors: { secondaryContainer: colors.primary, surface: colors.primary + '14' } }}
    />
  );
}
