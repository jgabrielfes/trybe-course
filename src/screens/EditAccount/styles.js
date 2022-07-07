import styled from 'styled-components/native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { FormContainer } from '../../components/FormContainer';

export const Container = styled(FormContainer)`
  flex: 1;
`;

export const Loading = styled(ActivityIndicator)`
  background-color: #000B;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px;
`;
