import React, { useCallback, useEffect, useState } from 'react';
import { Container, Title, Loading } from './styles';
import { Form } from './Form';
// import api from '../../services/api';

export function EditAccount({ navigation, route }) {
  const { profile } = route.params;
  const [submitting, setSubmitting] = useState(false);
  let event = null;

  const onSubmit = useCallback(async form => {
    console.log(form);
    setSubmitting(true);
    event = setTimeout(() => {
      setSubmitting(false);
      navigation.navigate('connected', { alert: true });
    }, 1500);
  }, []);

  useEffect(() => () => clearTimeout(event), []);

  return (
    <>
      {submitting && <Loading size="large" />}
      <Container>
        <Title variant="displaySmall">Dados básicos</Title>
        <Form
          data={profile}
          submitting={submitting}
          onSubmit={onSubmit}
        />
      </Container>
    </>
  );
}
