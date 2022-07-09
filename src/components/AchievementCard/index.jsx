import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { Container, Caption } from './styles';

export function AchievementCard({ Image, title, caption, ...rest }) {
  return (
    <Container {...rest}>
      <Image
        style={{
          alignSelf: 'center',
          marginRight: 20,
        }}
      />
      <View style={{ flex: 1 }}>
        <Text variant="titleLarge">{title}</Text>
        {caption && <Caption>{caption}</Caption>}
      </View>
    </Container>
  );
}
