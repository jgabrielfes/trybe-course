import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { WelcomeImage } from '../../assets/welcome';
import { Text } from 'react-native-paper';
import { Divider } from '../../components/Divider';
import { Button } from '../../components/Button';

export const Container = styled(KeyboardAwareScrollView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const Header = styled(WelcomeImage)`
  align-self: center;
  margin-top: 20px;
`;

export const Title = styled(Text)`
  margin: 20px 20px 0;
`;

export const Separator = styled(Divider)`
  margin: 20px 40px;
`;

export const CreateBtn = styled(Button)`
  align-self: center;
  margin-bottom: 20px;
  width: 200px;
`;
