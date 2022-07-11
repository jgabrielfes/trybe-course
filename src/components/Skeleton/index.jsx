import React, { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from 'react-native-reanimated';
import { Container, Gradient } from './styles';
import { useTheme } from 'react-native-paper';

export function Skeleton({ height, width, ...rest }) {
  const translateX = useSharedValue(-width);
  const { dark } = useTheme();

  useEffect(() => {
    translateX.value = withRepeat(withTiming(width, { duration: 1000 }), -1)
  }, []);

  const style = useAnimatedStyle(() => ({ transform: [{ translateX: translateX.value }] }));

  return (
    <Container height={height} width={width} {...rest}>
      <Animated.View
        style={[
          { height: '100%', width: '100%' },
          style,
        ]}
      >
        <Gradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          colors={['#ffffff00', `#ffffff${dark ? 1 : 6}f`, '#ffffff00']}
        />
      </Animated.View>
    </Container>
  );
}
