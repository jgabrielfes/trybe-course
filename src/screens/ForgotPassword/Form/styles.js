import styled from 'styled-components/native';
import { Surface } from 'react-native-paper';
import { Button } from '../../../components/Button';

export const Container = styled(Surface)`
  border-radius: ${({ theme }) => theme.roundness * 4}px;
  margin: 20px;
  padding: 16px;
`;

export const SubmitBtn = styled(Button)`
  align-self: center;
  margin-top: 40px;
  width: 200px;
`;
