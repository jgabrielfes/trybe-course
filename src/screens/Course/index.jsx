import React, { useEffect, useState } from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { LoadingBackdrop, AttendanceBtn, Container, Separator } from './styles';
import { CourseDrawer } from '../../components/CourseDrawer';
import { Content } from './Content'
import { SupContent } from './SupContent'
import axios from 'axios';
import api from '../../services/api';

const Drawer = createDrawerNavigator();

export function Course() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { user } = useSelector(state => state.configs);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const attendance = await api.attendance(user.access_token, controller.signal)

        navigation.setOptions({
          headerRight: () => (
            <AttendanceBtn
              onPress={() => {
                navigation.dispatch(DrawerActions.closeDrawer());
                navigation.navigate('attendances', { absences: attendance.absences });
              }}
            >
              Faltas: {attendance.absence_days}/{attendance.max_absence_days}
            </AttendanceBtn>
          ),
        });

        setLoading(false);
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }

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

    load();
    return () => controller.abort();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="drawerCourse"
      drawerContent={CourseDrawer}
      screenOptions={{
        drawerStyle: { backgroundColor: 'transparent', marginVertical: 10 },
        drawerType: 'front',
        sceneContainerStyle: { backgroundColor: colors.background },
        headerShown: false,
        overlayColor: '#000b',
        swipeEdgeWidth: width,
      }}
    >
      <Drawer.Screen name="drawerCourse">
        {() => loading ? <LoadingBackdrop size="large" /> : (
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
