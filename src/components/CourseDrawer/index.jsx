import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, BottomContainer, Item, Notification } from './styles';
import { doChangeTheme } from '../../store/reducers/configs';
import { MaterialIcons } from '@expo/vector-icons';

export function CourseDrawer({ navigation }) {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.configs);

  return (
    <Container>
      <Item
        icon={props => <MaterialIcons {...props} name="computer" />}
        label="Projetos"
        right={props => <Notification {...props}>3</Notification>}
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
