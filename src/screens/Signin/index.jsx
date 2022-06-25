import React, { useCallback, useState } from 'react';
import { Container, Header, Title, Separator, CreateBtn } from './styles';
import { Alert } from '../../components/Alert';
import { Form } from './Form';

export function Signin({ navigation }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState({ visible: false, message: '' });

  const onSubmit = useCallback(form => {
    setSubmitting(true);
    setTimeout(() => {
      if (form.email === 'jgabrielfes@gmail.com' && form.password === '123456') {
        setSubmitting(false);
      } else {
        setSubmitting(false);
        setError({ visible: true, message: 'Senha inválida' });
      }
    }, 1500);
  }, []);

  return (
    <>
      <Container automaticallyAdjustContentInsets={false}>
        <Header width={197} height={159} />
        <Title variant="displaySmall">
          Entre para continuar
        </Title>
        <Form submitting={submitting} onSubmit={onSubmit} />
        <Separator>OU</Separator>
        <CreateBtn
          mode="elevated"
          textColor="onSurface"
          disabled={submitting}
          onPress={() => navigation.navigate('signup')}
        >
          Criar conta
        </CreateBtn>
      </Container>
      <Alert
        mode="error"
        icon="error-outline"
        visible={error.visible}
        onDismiss={() => setError({ visible: false, message: error.message })}
      >
        {error.message}
      </Alert>
    </>
  );
}
