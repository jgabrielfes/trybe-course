import styled from 'styled-components/native';
import { Surface, Text } from 'react-native-paper';
import { Button } from '../../../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 8px 20px 0;
  padding: 16px;
`;

export const IconContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary}40;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const BoldText = styled(Text)`
  font-weight: bold;
  margin-top: 12px;
`;

export const Label = styled(Text)`
  margin-bottom: 24px;
`;

export const EditBtn = styled(Button)`
  align-self: flex-end;
`;
