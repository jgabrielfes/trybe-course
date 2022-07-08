import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native-paper';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';

export const LoadingBackdrop = styled(ActivityIndicator)`
  flex: 1;
`;

export const AttendanceBtn = styled(Button)`
`;

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Separator = styled(Divider)`
  margin: 20px 30px;
`;
