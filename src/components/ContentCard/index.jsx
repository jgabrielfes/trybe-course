import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Touchable, Container, Subtitle, Caption } from './styles';
import * as Haptics from 'expo-haptics';

export function ContentCard({ Image, title, subtitle, caption, horizontal, onPress, ...rest }) {
  return (
    <Container {...rest}>
      <Touchable
        horizontal={horizontal}
        onPress={onPress}
        onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
      >
        <Image
          height={!horizontal ? '100px' : '100%'}
          width={horizontal ? '80px' : '100%'}
          style={{
            alignSelf: 'center',
            marginBottom: horizontal ? 0 : 30,
            marginLeft: horizontal ? 20 : 0,
          }}
        />
        <View style={{ flex: 1 }}>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          <Text variant="headlineSmall">{title}</Text>
          {caption && <Caption>{caption}</Caption>}
        </View>
      </Touchable>
    </Container>
  );
}
