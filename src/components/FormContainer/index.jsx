import React from 'react';
import { ScrollView } from 'react-native';

export function FormContainer(props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustKeyboardInsets
      automaticallyAdjustContentInsets={false}
      automaticallyAdjustsScrollIndicatorInsets={false}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
}
