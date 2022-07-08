import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { Button } from '../../components/Button';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px;
`;

export const RequestBtn = styled(Button)`
  align-self: center;
  margin-bottom: 32px;
`;
