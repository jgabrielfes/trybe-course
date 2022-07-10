import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, BottomContainer, Item, Notification } from './styles';
import { doChangeTheme } from '../../store/reducers/configs';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import api from '../../services/api';

export function CourseDrawer({ navigation }) {
  const dispatch = useDispatch();
  const { theme, user } = useSelector(state => state.configs);
  const [activeProjects, setActiveProjects] = useState(0);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const projects = await api.projects(user.access_token, controller.signal);
        setActiveProjects(projects.filter(p => p.active).length);
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return (
    <Container>
      <Item
        icon={props => <MaterialIcons {...props} name="computer" />}
        label="Projetos"
        right={props => activeProjects ? <Notification {...props}>{activeProjects}</Notification> : undefined}
        onPress={() => {
          navigation.closeDrawer();
          navigation.navigate('projects');
        }}
      />
      <Item
        icon={props => <MaterialIcons {...props} name="record-voice-over" />}
        label="Trybe Talks"
      />
      <Item
        icon={props => <MaterialIcons {...props} name="article" />}
        label="Gabaritos"
      />
      <Item
        icon={props => <MaterialIcons {...props} name="school" />}
        label="Central de Soluções Estudantis"
      />
      <BottomContainer>
        <Item
          icon={props => <MaterialIcons {...props} name={`brightness-${theme === 'light' ? 4 : 7}`} />}
          label={`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
          onPress={() => dispatch(doChangeTheme())}
        />
      </BottomContainer>
    </Container>
  );
}
