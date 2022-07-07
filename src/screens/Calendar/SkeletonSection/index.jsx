import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
  SkeletonTitle,
  SkeletonSubtitle,
  Container,
  ContentContainer,
  SkeletonArea,
  SkeletonButton
} from './styles';

export function SkeletonSection() {
  const { width } = useWindowDimensions();

  return (
    <>
      <SkeletonTitle
        height={76}
        width={width - 40}
      />
      <SkeletonSubtitle
        height={28}
        width={width - 40}
      />
      {[...new Array(3)].map((_, index) => (
        <Container key={`skeleton-area-${index}`}>
          <ContentContainer>
            <SkeletonArea
              height={14}
              width={width - 160}
            />
            <SkeletonArea
              height={14}
              width={120}
            />
          </ContentContainer>
          <SkeletonButton
            height={30}
            width={30}
          />
        </Container>
      ))}
    </>
  );
}
