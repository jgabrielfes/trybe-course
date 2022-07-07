import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Title, Subtitle } from './styles';
import { SkeletonSection } from './SkeletonSection';
import { Content } from './Content';
import axios from 'axios';
import api from '../../services/api';

export function Calendar({ route, navigation }) {
  const { user } = useSelector(state => state.configs);
  const { module, description } = route.params;
  const [content, setContent] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const content = await api.content(module, user.access_token, controller.signal);
        setContent(content);
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }
    load();
    return () => controller.abort();
  }, [])

  return (
    <Container>
      {!content ? (
        <SkeletonSection />
      ) : (
        <>
          <Title variant="headlineLarge">{content.name}</Title>
          <Subtitle>{description}</Subtitle>
          <Content content={content} navigation={navigation} />
        </>
      )}
    </Container>
  );
}
