import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Container, Header, Title, Separator, CreateBtn } from './styles';
import { Form } from './Form';

export function Signin() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = useCallback(form => {
    console.log(form);
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 4000);
  }, []);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header width={197} height={159} />
      <Title variant="displayMedium">
        Entre para continuar
      </Title>
      <Form submitting={submitting} onSubmit={onSubmit} />
      <Separator>
        ou
      </Separator>
      <CreateBtn
        mode="elevated"
        textColor="onSurface"
        disabled={submitting}
        onPress={() => { }}
      >
        Criar conta
      </CreateBtn>
    </Container>
  );
}
