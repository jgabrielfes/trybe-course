import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Container, Gradient } from './styles';
import { useTheme } from 'react-native-paper';

export function Skeleton({ height, width, ...rest }) {
  const translateX = useRef(new Animated.Value(-width)).current;
  const { dark } = useTheme();

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, []);

  return (
    <Container height={height} width={width} {...rest}>
      <Animated.View
        style={{
          height: '100%',
          transform: [{ translateX }],
          width: '100%',
        }}
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
