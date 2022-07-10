import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { Divider } from '../../components/Divider';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const Subtitle = styled(Text)`
  margin: 0 20px 20px;
`;

export const Separator = styled(Divider)`
  margin: 8px 20px;
`;
