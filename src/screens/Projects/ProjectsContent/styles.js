import styled from 'styled-components/native';
import { Surface, ActivityIndicator, ProgressBar, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const LoadingContainer = styled(Surface)`
  align-items: center;
  align-self: center;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  margin: 18px 0 28px;
  width: 40px;
`;

export const Loading = styled(ActivityIndicator)``;

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 0 20px 10px;
  overflow: hidden;
`;

export const Progress = styled(ProgressBar)`
  position: absolute;
`;

export const Section = styled(List.Item)`
  flex-direction: column;
`;

export const Icon = styled(MaterialCommunityIcons)`
`;
