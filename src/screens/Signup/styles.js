import styled from 'styled-components/native';
import { FormContainer } from '../../components/FormContainer';
import { Text, Surface } from 'react-native-paper';

export const Container = styled(FormContainer)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled(Surface)`
  align-self: stretch;
  background-color: #036b52;
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 10px;
`;

export const HeaderTitle = styled(Text)`
  color: white;
  font-weight: bold;
  margin: 10px 20px;
`;

export const Title = styled(Text)`
  margin: 0 20px;
`;

export const Subtitle = styled(Text)`
  margin: 0 20px;
`;
