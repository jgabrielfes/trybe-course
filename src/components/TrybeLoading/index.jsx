import React, { useCallback, useEffect, useRef } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { useTheme } from 'react-native-paper';
import { Container, Item } from './styles';

export function TrybeLoading(props) {
  const { colors } = useTheme();
  const scale1 = useSharedValue(0);
  const scale2 = useSharedValue(0);
  const scale3 = useSharedValue(0);

  const doAnimate = useCallback(delay => (
    withDelay(delay, withRepeat(withSequence(
      withTiming(1, { easing: Easing.linear }),
      withTiming(0, { easing: Easing.linear }),
      withTiming(0),
    ), -1))
  ), []);

  useEffect(() => {
    scale1.value = doAnimate(0);
    scale2.value = doAnimate(200);
    scale3.value = doAnimate(400);
  }, []);

  const style1 = useAnimatedStyle(() => ({ transform: [{ scale: scale1.value }] }));
  const style2 = useAnimatedStyle(() => ({ transform: [{ scale: scale2.value }] }));
  const style3 = useAnimatedStyle(() => ({ transform: [{ scale: scale3.value }] }));

  return (
    <Container {...props}>
      <Animated.View style={style1}><Item color={colors.primary} /></Animated.View>
      <Animated.View style={style2}><Item color={colors.accent} /></Animated.View>
      <Animated.View style={style3}><Item color={colors.secondary} /></Animated.View>
    </Container>
  );
}
