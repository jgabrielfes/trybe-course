import React from 'react';
import { Button as PButton, useTheme } from 'react-native-paper';

export function Button({ buttonColor, textColor, loading, onPress, ...rest }) {
  const { colors } = useTheme();

  return (
    <PButton
      buttonColor={colors[buttonColor] || buttonColor}
      textColor={colors[textColor] || textColor}
      loading={loading}
      onPress={loading ? undefined : onPress}
      {...rest}
    />
  );
}