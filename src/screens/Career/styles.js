import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { ContentCard } from '../../components/ContentCard';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const Subtitle = styled(Text)`
  margin: 0 20px 20px;
`;

export const Card = styled(ContentCard)`
  margin: 20px 20px ${({ last }) => last ? '20px' : 0};
`;
