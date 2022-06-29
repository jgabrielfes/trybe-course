import styled from 'styled-components/native';
import { Surface, Drawer } from 'react-native-paper';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  height: 100%;
  margin-left: 10px;
  padding: 10px 0;
`;

export const Item = styled(Drawer.Item)``;
