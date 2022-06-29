import React from 'react';
import { Container, Title, Subtitle } from './styles';

export function Calendar({ route }) {
  const { title, subtitle } = route.params;

  return (
    <Container>
      <Title variant="headlineLarge">{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
