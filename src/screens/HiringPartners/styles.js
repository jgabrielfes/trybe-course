import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
`;

export const SearchbarContainer = styled(Animated.View)`
  justify-content: center;
  left: 0;
  margin: 10px;
  position: absolute;
  right: 0;
  top: 0;
`;
