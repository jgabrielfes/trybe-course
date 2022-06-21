import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { Container, Input, ForgotText, SubmitBtn } from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Insira o seu e-mail'),
  password: yup.string().required('Insira sua senha'),
});

export function Form({ submitting, onSubmit }) {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <Input
        control={control}
        name="email"
        label="E-mail"
        disabled={submitting}
        onSubmitEditing={() => setFocus('password')}
        left={<TextInput.Icon name="email" />}
        autoCapitalize="none"
        autoComplete="email"
        blurOnSubmit={false}
        returnKeyType="next"
        keyboardType="email-address"
      />
      <Input
        control={control}
        name="password"
        label="Senha"
        disabled={submitting}
        onSubmitEditing={handleSubmit(onSubmit)}
        left={<TextInput.Icon name="lock" />}
        autoCapitalize="none"
        returnKeyType="done"
        secureTextEntry={!showPassword}
        right={(
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            disabled={submitting}
            forceTextInputFocus={false}
            onPress={() => setShowPassword(prev => !prev)}
          />
        )}
      />
      <TouchableOpacity onPress={() => { }}>
        <ForgotText>
          Esqueci minha senha
        </ForgotText>
      </TouchableOpacity>
      <SubmitBtn
        mode="contained"
        buttonColor={colors.secondary}
        textColor={colors.onSecondary}
        loading={submitting}
        onPress={submitting ? undefined : handleSubmit(onSubmit)}
      >
        {submitting ? 'Entrando' : 'Entrar'}
      </SubmitBtn>
    </Container>
  );
}
