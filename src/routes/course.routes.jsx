import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DayDrawer } from '../components/DayDrawer';
import { Calendar } from '../screens/Calendar';
import { Day } from '../screens/Day';
import { Projects } from '../screens/Projects';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function CourseRoutes() {
  const { colors } = useTheme();
  return (
    <>
      <Stack.Screen
        name="projects"
        component={Projects}
        options={{ headerTitle: 'Projetos' }}
      />
      <Stack.Screen
        name="calendar"
        component={Calendar}
        options={{
          headerTitle: 'Agenda',
          headerRight: () => (
            <Appbar.Action
              iconColor={colors.primary}
              icon="magnify"
              onPress={() => undefined}
            />
          )
        }}
      />
      <Stack.Screen
        name="day"
        options={{ headerTitle: 'Conteúdo' }}
      >
        {({ route }) => (
          <Drawer.Navigator
            initialRouteName="dayDrawer"
            drawerContent={DayDrawer}
            screenOptions={{
              drawerPosition: 'right',
              drawerStyle: { backgroundColor: 'transparent', marginVertical: 10 },
              drawerType: 'front',
              headerShown: false,
              overlayColor: '#000b',
              swipeEnabled: false,
            }}
          >
            <Drawer.Screen
              name="dayDrawer"
              component={Day}
              initialParams={{ ...route.params }}
            />
          </Drawer.Navigator>
        )}
      </Stack.Screen>
    </>
  );
}