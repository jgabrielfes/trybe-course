import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { TrybeLoading } from '../../components/TrybeLoading';
import { Divider } from '../../components/Divider';
import { Button } from '../../components/Button';

export const LoadingBackdrop = styled(TrybeLoading)`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const Subtitle = styled(Text)`
  opacity: 0.5;
  margin: 0 20px;
`;

export const Separator = styled(Divider)`
  margin: 20px;
`;

export const LabelContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 20px ${({ last }) => last ? 0 : 20}px;
`;

export const LabelIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.onSurface};
  margin-right: 15px;
`;

export const Label = styled(Text)`
  opacity: 0.7;
`;

export const LogoutContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const LogoutBtn = styled(Button)`
  margin: 0 20px 20px;
`;
