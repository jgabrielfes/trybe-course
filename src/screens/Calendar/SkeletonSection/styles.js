import styled from 'styled-components/native';
import { Surface } from 'react-native-paper';
import { Skeleton } from '../../../components/Skeleton';

export const SkeletonTitle = styled(Skeleton)`
  margin: 20px 20px 0;
`;

export const SkeletonSubtitle = styled(Skeleton)`
  margin: 8px 20px 20px;
`;

export const Container = styled(Surface)`
  align-items: center;
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px 10px;
  padding: 18px 0;
`;

export const ContentContainer = styled.View``;

export const SkeletonArea = styled(Skeleton)`
  margin: 2px 15px;
`;

export const SkeletonButton = styled(Skeleton)`
  border-radius: 15px;
  margin: 0 15px;
`;
