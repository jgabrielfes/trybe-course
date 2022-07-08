import React from 'react';
import { Container, Title, RequestBtn } from './styles';
import { Absences } from './Absences';

export function Attendances({ route }) {
  const { absences } = route.params;

  return (
    <Container>
      <Title variant="headlineLarge">Histórico de Faltas</Title>
      <RequestBtn
        buttonColor="secondary"
        textColor="onSecondary"
        mode="contained"
      >
        Solicitar Abono
      </RequestBtn>
      <Absences absences={absences} />
    </Container>
  );
}
