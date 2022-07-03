import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.onBackground}1e;
  border-radius: ${({ theme, radius }) => theme.roundness * radius || theme.roundness}px;
  height: ${({ height }) => height || 0}px;
  overflow: hidden;
  width: ${({ width }) => width || 0}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
  width: 100%;
`;
