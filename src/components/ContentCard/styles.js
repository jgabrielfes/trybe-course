import styled from 'styled-components/native';
import { Surface, Text } from 'react-native-paper';

export const Touchable = styled.TouchableOpacity`
  align-items: ${({ horizontal }) => horizontal ? 'center' : 'stretch'};
  flex-direction: ${({ horizontal }) => horizontal ? 'row-reverse' : 'column'};
  padding: 20px;
`;

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  overflow: hidden;
`;

export const Subtitle = styled(Text)`
  opacity: 0.5;
`;

export const Caption = styled(Text)`
  opacity: 0.75;
`;
