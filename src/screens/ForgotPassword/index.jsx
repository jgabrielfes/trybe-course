import React, { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Container, Header, Title } from './styles';
import { Form } from './Form';

export function ForgotPassword() {
  const [submitting, setSubmitting] = useState(false);
  const { height } = useWindowDimensions();

  const onSubmit = useCallback(form => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1500);
  }, []);

  return (
    <Container>
      <Header height={height / 4} />
      <Title variant="displaySmall">
        Redefina a sua senha
      </Title>
      <Form submitting={submitting} onSubmit={onSubmit} />
    </Container>
  );
}
