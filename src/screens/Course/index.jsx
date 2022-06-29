import React from 'react';
import { Container, Separator } from './styles';
import { Content } from './Content'
import { SupContent } from './SupContent'

export function Course({ navigation }) {
  return (
    <Container>
      <Content navigation={navigation} />
      <Separator>Conteúdos Complementares</Separator>
      <SupContent navigation={navigation} />
    </Container>
  );
}
