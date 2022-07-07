import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Text } from 'react-native-paper';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled(Text)`
  margin: 20px 20px 0;
`;

export const Subtitle = styled(Text)`
  margin: 0 20px 20px;
`;
