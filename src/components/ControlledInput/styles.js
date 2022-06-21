import styled from 'styled-components/native';
import { HelperText } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
`;

export const ErrorContainer = styled.View`
  align-items: center;
  align-self: flex-end;
  flex-direction: row;
`;

export const ErrorIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.error};
`;

export const ErrorLabel = styled(HelperText)`
  padding: 0 4px;
`;
