import React from 'react';
import { Linking, useWindowDimensions } from 'react-native';
import {
  Container,
  Header,
  Title,
  SubtitleContainer,
  SubtitleIcon,
  SubtitleBold,
  Subtitle,
  RepoBtn,
  Separator
} from './styles';
import { Percentual } from './Percentual';
import { Achievements } from './Achievements';

function getAdjustedDeadline(deadline) {
  const date = new Date(deadline);
  const dateString = date.toLocaleDateString();
  const hourString = date.getHours();
  return `${dateString} ${hourString}h`;
}

export function Project({ route }) {
  const { height } = useWindowDimensions();
  const { project } = route.params;

  return (
    <Container>
      <Header height={height / 5} />
      <Title variant="headlineLarge">{project.display_name}</Title>
      <SubtitleContainer>
        <SubtitleIcon name="error-outline" />
        <SubtitleBold>Prazo de entrega regular:</SubtitleBold>
        <Subtitle>{getAdjustedDeadline(project.deadline)}</Subtitle>
      </SubtitleContainer>
      <RepoBtn
        mode="contained"
        buttonColor="secondary"
        textColor="onSecondary"
        onPress={() => Linking.openURL(project.repository_url)}
      >
        Acessar repositório
      </RepoBtn>
      <Separator>Percentual Cumprido</Separator>
      <Percentual required requirements={project.required_requirements} />
      <Percentual requirements={project.total_requirements} />
      <Separator>Minhas Conquistas</Separator>
      <Achievements projectId={project.id} />
    </Container>
  );
}
