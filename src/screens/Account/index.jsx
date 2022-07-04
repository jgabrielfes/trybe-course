import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title, LogoutBtn } from './styles';
import { setUser } from '../../store/reducers/configs';

export function Account() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title variant="headlineLarge">João Ferraz</Title>
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