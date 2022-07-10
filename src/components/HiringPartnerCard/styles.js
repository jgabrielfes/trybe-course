import styled from 'styled-components/native';
import { Surface, Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Skeleton } from '../../components/Skeleton';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  overflow: hidden;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 20px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const LogoSkeleton = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.roundness * 2}px;
  position: absolute;
`;

export const Logo = styled.Image`
  border-radius: ${({ theme }) => theme.roundness * 2}px;
  height: 60px;
  margin-right: 12px;
  width: 60px;
`;

export const HeaderSubContainer = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
`;

export const LocationContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const LocationIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.onSurface};
  margin-right: 4px;
`;

export const LocationLabel = styled(Text)`
`;

export const Description = styled(Text)`
  margin-top: 12px;
`;
