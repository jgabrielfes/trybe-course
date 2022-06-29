import styled from 'styled-components/native';
import { ForgotImage } from '../../assets/forgot';
import { Text } from 'react-native-paper';
import { FormContainer } from '../../components/FormContainer';

export const Container = styled(FormContainer)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled(ForgotImage)`
  align-self: center;
  margin-top: 20px;
`;

export const Title = styled(Text)`
  margin: 20px 20px 0;
`;
