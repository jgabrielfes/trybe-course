import styled from 'styled-components/native';
import { ActivityIndicator, Text } from 'react-native-paper';

export const LoadingBackdrop = styled(ActivityIndicator)`
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
