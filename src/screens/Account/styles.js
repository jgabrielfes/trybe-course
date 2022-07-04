import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '../../components/Button';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const LogoutBtn = styled(Button)`
  margin: 20px;
`;
