import styled from 'styled-components/native';
import { Surface, TextInput, HelperText } from 'react-native-paper';
import { Button } from '../../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 20px;
  padding: 16px;
`;

export const Input = styled(TextInput)`
`;

export const RequireLabelContainer = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ noMargin }) => noMargin ? 0 : 10}px;
`;

export const RequireIcon = styled(MaterialIcons)`
  color: ${({ theme, error }) => error ? theme.colors.error : theme.colors.onSurface};
  margin: 0 4px;
`;

export const RequireLabel = styled(HelperText)`
  padding: 4px;
  padding-top: ${({ fullWidth }) => fullWidth ? 0 : 4}px;
  margin-left: ${({ fullWidth }) => !fullWidth ? 0 : 20}px;
  min-width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const BtnsContainer = styled.View`
  align-items: center;  
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ActionBtn = styled(Button)`
  min-width: 48%;
`;
