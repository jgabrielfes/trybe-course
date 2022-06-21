import React from 'react';
import { Appbar as PAppbar } from 'react-native-paper';
import { LogoImage } from '../../assets/logo';

export function Appbar() {
  return (
    <PAppbar.Header elevated mode="center-aligned">
      <PAppbar.Content title={<LogoImage width="28px" height="32px" />} />
    </PAppbar.Header>
  );
}
