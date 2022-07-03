import React, { useEffect, useState } from 'react';
import { Container, Title, Subtitle } from './styles';
import { SkeletonSection } from './SkeletonSection';
import { Content } from './Content';

export function Calendar({ route, navigation }) {
  const { title, subtitle } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const event = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(event);
  }, [])

  return (
    <Container>
      <Title variant="headlineLarge">{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {loading ? (
        <SkeletonSection />
      ) : (
        <Content name="fundamentals" navigation={navigation} />
      )}
    </Container>
  );
}
