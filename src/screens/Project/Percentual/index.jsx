import React from 'react';
import {
  Container,
  TitleContainer,
  TitleBold,
  Title,
  ProgressContainer,
  Progress,
  ProgressLabel
} from './styles';

export function Percentual({ required, requirements }) {
  return (
    <Container>
      <TitleContainer>
        <TitleBold>
          {required ? (
            'Requisitos obrigatórios aprovados:'
          ) : (
            'Requisitos totais aprovados:'
          )}
        </TitleBold>
        <Title>{requirements.approved}/{requirements.total}</Title>
      </TitleContainer>

      <ProgressContainer>
        <Progress progress={requirements.percentage} />
        <ProgressLabel>
          {Math.round(requirements.percentage * 100)}%
        </ProgressLabel>
      </ProgressContainer>
    </Container>
  );
}
