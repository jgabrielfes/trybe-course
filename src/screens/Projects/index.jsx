import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Title, Subtitle } from './styles';
import axios from 'axios';
import api from '../../services/api';

export function Projects() {
  const { user } = useSelector(state => state.configs);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const projects = await api.projects(user.access_token, controller.signal)
        console.log(projects);
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }

    load();

    return () => controller.abort();
  }, []);

  return (
    <Container>
      <Title variant="headlineLarge">Projetos Regulares</Title>
      <Subtitle>
        Veja seus projetos disponíveis antes do prazo de recuperação e acompanhe seu progresso.
      </Subtitle>
    </Container>
  );
}
