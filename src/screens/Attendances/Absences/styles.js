import styled from 'styled-components/native';
import { Surface, List, Text } from 'react-native-paper';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 0 20px 15px;
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

export const RightContainer = styled(Surface)`
  align-items: center;
  align-self: center;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  width: 40px;
`;

export const RightLabel = styled(Text)`
`;
