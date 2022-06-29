import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, LogoutBtn } from './styles';
import { setUser } from '../../store/reducers/configs';

export function Account() {
  const dispatch = useDispatch();

  return (
    <Container>
      <LogoutBtn
        mode="contained"
        buttonColor="secondary"
        textColor="onSecondary"
        onPress={() => dispatch(setUser(null))}
      >
        Sair
      </LogoutBtn>
    </Container>
  );
}