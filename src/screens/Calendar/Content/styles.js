import styled from 'styled-components/native';
import { Surface, List } from 'react-native-paper';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 0 20px 10px;
  overflow: hidden;
`;

export const ListContainer = styled(List.AccordionGroup)`
`;

export const Section = styled(List.Accordion)`
  background-color: ${({ theme }) => theme.colors.elevation.level1};
`;

export const Item = styled(List.Item)`
  border-color: ${({ theme }) => theme.colors.surfaceVariant};
  border-top-width: 1px;
`;
