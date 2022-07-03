import React from 'react';
import { useWindowDimensions } from 'react-native';
import { SkeletonArea } from './styles';

export function SkeletonSection() {
  const { width } = useWindowDimensions();

  return [...new Array(4)].map((_, index) => (
    <SkeletonArea
      key={`calendar-skeleton-${index}`}
      height={73}
      width={width - 40}
    />
  ));
}
