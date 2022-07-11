import styled from 'styled-components/native';
import { AchievementCard } from '../../../components/AchievementCard';
import { TrybeLoading } from '../../../components/TrybeLoading';

export const Container = styled(AchievementCard)`
  margin: 10px 20px;
`;

export const Loader = styled(TrybeLoading)`
  margin-bottom: 20px;
`;
