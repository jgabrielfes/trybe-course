import styled from 'styled-components/native';
import { TrybeLoading } from '../../components/TrybeLoading';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';

export const LoadingBackdrop = styled(TrybeLoading)`
  flex: 1;
`;

export const AttendanceBtn = styled(Button)`
  margin-right: 4px;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Separator = styled(Divider)`
  margin: 20px 30px;
`;
