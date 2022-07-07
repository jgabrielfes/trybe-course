import styled from 'styled-components/native';
import { Surface, HelperText } from 'react-native-paper';
import { ControlledInput } from '../../../components/ControlledInput';
import { Divider } from '../../../components/Divider';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 0 20px 20px;
  padding: 15px;
`;

export const Input = styled(ControlledInput)`
  margin-top: ${({ first }) => first ? 0 : 20}px;
`;

export const InputInfo = styled(HelperText)`
  font-style: italic;
  padding: 0 4px;
  text-align: right;
`;

export const Separator = styled(Divider)`
  margin: 20px;
`;
