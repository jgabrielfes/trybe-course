import styled from 'styled-components/native';
import { Text } from 'react-native-paper';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const Subtitle = styled(Text)`
  margin: 0 20px 20px;
`;
