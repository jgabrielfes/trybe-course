import styled from 'styled-components/native';
import { Skeleton } from '../../../components/Skeleton';

export const SkeletonArea = styled(Skeleton)`
  align-self: center;
  margin-bottom: 10px;
  border-radius: ${({ theme }) => theme.roundness * 4}px;
`;
