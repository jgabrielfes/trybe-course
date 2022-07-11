import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { TrybeLoading } from '../../components/TrybeLoading';

export const LoadingBackdrop = styled(TrybeLoading)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Content = styled(Text)`
  margin: 20px;
`;
