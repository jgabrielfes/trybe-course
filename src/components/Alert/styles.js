import styled from 'styled-components/native';
import { Snackbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(Snackbar)`
  background-color: ${({ theme, color }) => theme.colors[color] || undefined};
  padding: 0;
`;

export const Content = styled.View`
  align-items: center;
  background-color: blue;
  flex-direction: row;
`;

export const Text = styled.Text`
  color: ${({ theme, color }) => theme.colors[color] || undefined};
  margin-left: 6px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme, color }) => theme.colors[color] || undefined};
`;
