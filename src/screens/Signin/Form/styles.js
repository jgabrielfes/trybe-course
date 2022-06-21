import styled from 'styled-components/native';
import { Button, HelperText } from 'react-native-paper';
import { ControlledInput } from '../../../components/ControlledInput';

export const Container = styled.View`
  align-self: stretch;
  margin: 0 20px;
`;

export const Input = styled(ControlledInput)`
  margin-top: 20px;
`;

export const ForgotText = styled(HelperText)`
  padding: 0 4px;
  text-align: right;
`;

export const SubmitBtn = styled(Button)`
  align-self: center;
  margin-top: 40px;
  width: 200px;
`;
