import styled from 'styled-components/native';
import { Divider } from '../../components/Divider';

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Separator = styled(Divider)`
  margin: 20px 30px;
`;
