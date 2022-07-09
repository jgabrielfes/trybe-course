import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { Divider } from '../../components/Divider';
import { ProjectImage } from '../../assets/project';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled(ProjectImage)`
  align-self: center;
  margin-top: 20px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  margin: 20px 20px 0;
`;

export const SubtitleContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 20px 20px;
`;

export const SubtitleIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.tertiary};
  margin-right: 4px;
`;

export const SubtitleBold = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: bold;
  margin-right: 4px;
`;

export const Subtitle = styled(Text)`
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const RepoBtn = styled(Button)`
  align-self: center;
  margin: 10px 0;
`;

export const Separator = styled(Divider)`
  margin: 20px;
`;
