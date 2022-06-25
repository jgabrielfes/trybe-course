import React from 'react';
import { Container, Input, InputInfo, SubmitBtn } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('O campo nome é obrigatório'),
  email: yup.string().email('Insira um e-mail válido').required('O campo e-mail é obrigatório'),
});

export function FirstForm({ defaultValues, onSubmit }) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: { name: defaultValues.name, email: defaultValues.email },
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Input
        noMargin
        control={control}
        name="name"
        label="Nome"
        onSubmitEditing={() => setFocus('email')}
        autoCapitalize="words"
        autoComplete="name"
        autoFocus={!defaultValues.name}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <InputInfo>Fique à vontade para usar seu nome social</InputInfo>
      <Input
        control={control}
        name="email"
        label="E-mail"
        onSubmitEditing={handleSubmit(onSubmit)}
        autoCapitalize="none"
        autoComplete="email"
        returnKeyType="go"
        keyboardType="email-address"
      />
      <SubmitBtn
        buttonColor="secondary"
        textColor="onSecondary"
        mode="contained"
        onPress={handleSubmit(onSubmit)}
      >
        Continuar
      </SubmitBtn>
    </Container>
  );
}
