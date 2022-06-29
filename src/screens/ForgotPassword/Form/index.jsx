import React from 'react';
import { TextInput } from 'react-native-paper';
import { Container, SubmitBtn } from './styles';
import { ControlledInput as Input } from '../../../components/ControlledInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Insira o seu e-mail'),
});

export function Form({ submitting, onSubmit }) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Input
        control={control}
        name="email"
        label="E-mail"
        editable={!submitting}
        onSubmitEditing={() => setFocus('password')}
        left={<TextInput.Icon name="email" />}
        autoCapitalize="none"
        autoComplete="email"
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="email-address"
      />
      <SubmitBtn
        mode="contained"
        buttonColor="secondary"
        textColor="onSecondary"
        loading={submitting}
        onPress={handleSubmit(onSubmit)}
      >
        {submitting ? 'Enviando' : 'Enviar'}
      </SubmitBtn>
    </Container>
  );
}
