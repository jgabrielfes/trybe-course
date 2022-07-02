import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Appbar } from '../components/Appbar';
import { Appbar as PAppbar } from 'react-native-paper';
import { CourseDrawer } from '../components/CourseDrawer';
import { Course } from '../screens/Course';
import { Calendar } from '../screens/Calendar';
import { Projects } from '../screens/Projects';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// ANALISAR CONSTRUÇÃO DAS TELAS DO CURSO!!

export function CourseRoutes({ colors }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="course"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        cardShadowEnabled: true,
        cardStyle: { backgroundColor: colors.background },
        detachPreviousScreen: false,
        gestureEnabled: true,
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
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
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
        name="calendar"
        component={Calendar}
        options={{
          headerTitle: 'Agenda',
        }}
      />
      <Stack.Screen
        name="projects"
        component={Projects}
        options={{
          headerTitle: 'Projetos',
        }}
      />
    </Stack.Navigator>
  );
}