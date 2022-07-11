import styled from 'styled-components/native';
import { LoadingImage } from '../../assets/loading';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled(LoadingImage)`
  margin: 0 10px;
`;
