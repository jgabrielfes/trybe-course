import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Appbar } from '../components/Appbar';
import { Appbar as PAppbar, useTheme } from 'react-native-paper';
import { CourseDrawer } from '../components/CourseDrawer';
import { Course } from '../screens/Course';
import { Calendar } from '../screens/Calendar';
import { Day } from '../screens/Day';
import { Projects } from '../screens/Projects';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function CourseRoutes() {
  const { width } = useWindowDimensions();
  const { dispatch } = useNavigation();
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="course"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        cardShadowEnabled: true,
        cardStyle: { backgroundColor: colors.background },
        detachPreviousScreen: false,
        gestureResponseDistance: width,
        header: props => <Appbar {...props} iconColor={colors.primary} />,
      }}
    >
      <Stack.Screen
        name="course"
        options={{
          headerLeft: () => (
            <PAppbar.Action
              iconColor={colors.primary}
              isLeading
              icon="menu"
              onPress={() => dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        }}
      >
        {() => (
          <Drawer.Navigator
            initialRouteName="courseDrawer"
            drawerContent={CourseDrawer}
            screenOptions={{
              drawerStyle: { backgroundColor: 'transparent', marginVertical: 10 },
              drawerType: 'front',
              headerShown: false,
              overlayColor: '#000b',
              swipeEdgeWidth: width,
            }}
          >
            <Drawer.Screen name="courseDrawer" component={Course} />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="projects"
        component={Projects}
        options={{
          headerTitle: 'Projetos',
        }}
      />
      <Stack.Screen
        name="calendar"
        component={Calendar}
        options={{
          headerTitle: 'Agenda',
        }}
      />
      <Stack.Screen
        name="day"
        component={Day}
        options={{
          headerTitle: 'Conteúdo',
        }}
      />
    </Stack.Navigator>
  );
}