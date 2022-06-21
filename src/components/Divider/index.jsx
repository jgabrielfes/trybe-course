import React from 'react';
import { Container, MDivider, MChip } from './styles';

export function Divider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <MDivider />
      {children && (
        <>
          <MChip>
            {children}
          </MChip>
          <MDivider />
        </>
      )}
    </Container>
  );
}
