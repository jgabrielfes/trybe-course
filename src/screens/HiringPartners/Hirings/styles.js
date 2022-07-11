import styled from 'styled-components/native';
import { Surface, ActivityIndicator, Text } from 'react-native-paper';
import { HiringPartnerCard } from '../../../components/HiringPartnerCard';

export const LoadingContainer = styled(Surface)`
  align-items: center;
  align-self: center;
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  margin: 18px 0 28px;
  width: 40px;
`;

export const Loading = styled(ActivityIndicator)``;

export const NotFoundTitle = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const NotFoundCaption = styled(Text)`
  margin: 0 20px 20px;
`;

export const List = styled.FlatList`
  padding-bottom: 20px;
`;

export const Card = styled(HiringPartnerCard)`
  margin: 20px 20px 0;
`;
