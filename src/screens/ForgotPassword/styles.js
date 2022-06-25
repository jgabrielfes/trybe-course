import styled from 'styled-components/native';
import { FormContainer } from '../../components/FormContainer';

export const Container = styled(FormContainer)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
