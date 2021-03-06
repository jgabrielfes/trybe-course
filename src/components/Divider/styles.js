import styled from 'styled-components/native';
import { Divider, Chip } from 'react-native-paper';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const MDivider = styled(Divider)`
  flex: 1;
  height: 1px;
`;

export const MChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.surfaceVariant}60;
  border-radius: ${({ theme }) => theme.roundness * 5}px;
  margin: 0 12px;
`;