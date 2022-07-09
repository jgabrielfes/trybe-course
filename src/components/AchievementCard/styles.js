import styled from 'styled-components/native';
import { Surface, Text } from 'react-native-paper';

export const Container = styled(Surface)`
  align-items:center;
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  flex-direction: row;
  padding: 20px;
`;

export const Caption = styled(Text)`
  opacity: 0.75;
`;
