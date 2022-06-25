import React from 'react';
import { Container, Text, Icon } from './styles';

export function Alert({ icon, children, mode, ...rest }) {
  const backgroundColor = `${mode}Container`;
  const textColor = `on${mode[0].toUpperCase() + mode.slice(1)}Container`;

  return (
    <Container
      {...(icon && { action: { label: <Icon name={icon} size={22} color={textColor} /> } })}
      color={backgroundColor}
      duration={3000}
      {...rest}
    >
      <Text color={textColor} children={children} />
    </Container>
  );
}
