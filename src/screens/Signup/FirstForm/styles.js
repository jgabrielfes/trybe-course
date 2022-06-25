import styled from 'styled-components/native';
import { Surface, HelperText } from 'react-native-paper';
import { Button } from '../../../components/Button';
import { ControlledInput } from '../../../components/ControlledInput';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 20px;
  padding: 16px;
`;

export const Input = styled(ControlledInput)`
  margin-top: ${({ noMargin }) => noMargin ? 0 : 20}px;
`;

export const InputInfo = styled(HelperText)`
  font-style: italic;
  padding: 0 4px;
  text-align: right;
`;

export const SubmitBtn = styled(Button)`
  margin-top: 20px;
`;
