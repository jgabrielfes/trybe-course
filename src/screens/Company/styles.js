import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { TrybeLoading } from '../../components/TrybeLoading';
import { Skeleton } from '../../components/Skeleton';
import { Divider } from '../../components/Divider';
import { Button } from '../../components/Button';

export const LoadingBackdrop = styled(TrybeLoading)`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const LogoSkeleton = styled(Skeleton)`
  align-self: center;
  border-radius: ${({ theme }) => theme.roundness * 2}px;
  margin-top: 20px;
  position: absolute;
`;

export const Logo = styled.Image`
  align-self: center;
  border-radius: ${({ theme }) => theme.roundness * 2}px;
  height: 120px;
  margin-top: 20px;
  width: 120px;
`;

export const Name = styled(Text)`
  text-align: center;
  font-weight: bold;
  margin: 12px 20px 0;
`;

export const Separator = styled(Divider)`
  margin: 20px;
`;

export const TryberButton = styled(Button)`
  align-self: center;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 0 20px;
`;

export const Description = styled(Text)`
  margin: 0 20px 20px;
`;
