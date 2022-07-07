import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useWindowDimensions } from 'react-native';
import { Container, Header, Title, Separator, CreateBtn } from './styles';
import { Alert } from '../../components/Alert';
import { Form } from './Form';
import { setUser } from '../../store/reducers/configs';
import api from '../../services/api';

export function Signin({ navigation }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState({ visible: false, message: '' });
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();

  const onSubmit = useCallback(async form => {
    setSubmitting(true);

    try {
      const { access_token, user } = await api.authentication(form);
      dispatch(setUser({ access_token, ...user }));
    } catch {
      setSubmitting(false);
      setError({ visible: true, message: 'Credenciais inválidas' });
    }
  }, []);

  return (
    <>
      <Container automaticallyAdjustContentInsets={false}>
        <Header height={height / 4} />
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
        icon="alert-circle-outline"
        visible={error.visible}
        onDismiss={() => setError({ visible: false, message: error.message })}
      >
        {error.message}
      </Alert>
    </>
  );
}
