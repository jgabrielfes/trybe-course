import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding-top: ${StatusBar.currentHeight || 0}px;
`;

export const LogoutBtn = styled(Button)`
  margin: 20px;
`;
