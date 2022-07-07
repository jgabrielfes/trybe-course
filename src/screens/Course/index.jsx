import React, { useEffect } from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Container, Separator } from './styles';
import { CourseDrawer } from '../../components/CourseDrawer';
import { Content } from './Content'
import { SupContent } from './SupContent'

const Drawer = createDrawerNavigator();

export function Course() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Appbar.Action
          iconColor={colors.primary}
          isLeading
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      ),
    });

    return () => navigation.setOptions({ headerLeft: undefined });
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="drawerCourse"
      drawerContent={CourseDrawer}
      screenOptions={{
        drawerStyle: { backgroundColor: 'transparent', marginVertical: 10 },
        drawerType: 'front',
        headerShown: false,
        overlayColor: '#000b',
        swipeEdgeWidth: width,
      }}
    >
      <Drawer.Screen name="drawerCourse">
        {() => (
          <Container>
            <Content />
            <Separator>Conteúdos Complementares</Separator>
            <SupContent />
          </Container>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
