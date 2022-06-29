import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Container, Input, ForgotText, SubmitBtn } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Insira o seu e-mail'),
  password: yup.string().required('Insira sua senha'),
});

export function Form({ submitting, onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const { navigate } = useNavigation();

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
        editable={!submitting}
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
        editable={!submitting}
        onSubmitEditing={handleSubmit(onSubmit)}
        left={<TextInput.Icon name="lock" />}
        returnKeyType="go"
        textContentType="newPassword"
        keyboardType="ascii-capable"
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
      <TouchableOpacity disabled={submitting} onPress={() => navigate('forgotPassword')}>
        <ForgotText>
          Esqueci minha senha
        </ForgotText>
      </TouchableOpacity>
      <SubmitBtn
        mode="contained"
        buttonColor="secondary"
        textColor="onSecondary"
        loading={submitting}
        onPress={handleSubmit(onSubmit)}
      >
        {submitting ? 'Entrando' : 'Entrar'}
      </SubmitBtn>
    </Container>
  );
}
