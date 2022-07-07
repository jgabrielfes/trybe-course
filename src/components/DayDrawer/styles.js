import styled from 'styled-components/native';
import { Surface, Drawer } from 'react-native-paper';
import { Button } from '../Button';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  height: 100%;
  margin-right: 10px;
  overflow: hidden;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const SectionContainer = styled.View`
`;

export const BottomContainer = styled.View`
  border-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-top-width: 1px;
  justify-content: flex-end;
  padding: 10px 0;
`;

export const Item = styled(Button)`
  margin: 1px 8px;
`;

export const SubItem = styled(Button)`
  margin: 1px 8px;
  opacity: 0.7;
  padding-left: 4px;
`;
