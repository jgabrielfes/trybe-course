import React from 'react';
import { Appbar as PAppbar } from 'react-native-paper';
import { LogoImage } from '../../assets/logo';

export function Appbar({ back, navigation, options, iconColor }) {
  return (
    <PAppbar.Header elevated mode="center-aligned">
      {back && <PAppbar.BackAction iconColor={iconColor} onPress={navigation.goBack} />}
      <PAppbar.Content title={<LogoImage width="28px" height="32px" />} />
      {options.headerRight()}
    </PAppbar.Header>
  );
}
