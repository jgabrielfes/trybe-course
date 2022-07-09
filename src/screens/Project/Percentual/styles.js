import styled from 'styled-components/native';
import { Surface, Text, ProgressBar } from 'react-native-paper';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  padding: 15px 10px;
  margin: 0 20px 15px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const TitleBold = styled(Text)`
  font-weight: bold;
  margin-right: 4px;
`;

export const Title = styled(Text)``;

export const ProgressContainer = styled.View`
  justify-content: space-between;
`

export const Progress = styled(ProgressBar)`
  border-radius: ${({ theme }) => theme.roundness}px;
`;

export const ProgressLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: right;
`;
