import React from 'react';
import { Divider } from 'react-native-paper';
import { Container, Title, Subtitle } from './styles';
import { ProjectsContent } from './ProjectsContent';

export function Projects() {
  return (
    <Container>
      <Title variant="headlineLarge">Projetos Regulares</Title>
      <Subtitle>
        Veja seus projetos disponíveis antes do prazo de recuperação e acompanhe seu progresso.
      </Subtitle>
      <Divider />
      <ProjectsContent />
    </Container>
  );
}
