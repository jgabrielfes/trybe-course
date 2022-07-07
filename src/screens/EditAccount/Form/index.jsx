import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Input, InputInfo, Separator } from './styles';
import { Button } from '../../../components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup.string().required('Insira seu nome completo'),
  name: yup.string().required('Insira seu nome de preferência'),
  cep: yup.string().required('Insira seu CEP'),
  state: yup.string().required(),
  city: yup.string().required(),
  neighborhood: yup.string().required('Insira o nome do seu bairro'),
  address: yup.string().required('Insira o nome da sua rua'),
  residentialNumber: yup.string().required('Insira o número da sua residência'),
  addressComplement: yup.string(),
  email: yup.string().email('Insira um e-mail válido').required('Insira seu e-mail'),
  phoneNumber: yup.string().required('Insira o número de seu telefone'),
});

export function Form({ data, submitting, onSubmit }) {
  const navigation = useNavigation();
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      fullName: data.full_name,
      name: data.name,
      cep: data.zipcode,
      state: data.state,
      city: data.city,
      neighborhood: data.neighborhood,
      address: data.address,
      residentialNumber: data.residential_number,
      addressComplement: data.address_complement,
      email: data.email,
      phoneNumber: data.phone_number,
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          disabled={submitting}
          onPress={handleSubmit(onSubmit)}
        >
          Salvar
        </Button>
      ),
    });
  }, [submitting]);

  return (
    <Container>
      <Input
        first
        control={control}
        name="fullName"
        label="Nome completo"
        editable={false}
      />
      <InputInfo>Por questões de segurança não permitimos a alteração do seu nome completo via perfil. Caso queira alterá-lo envie uma solicitação para a CSE (Central de Soluções Estudantis)</InputInfo>

      <Input
        control={control}
        name="name"
        label="Nome de preferência"
        editable={!submitting}
        onSubmitEditing={() => setFocus('cep')}
        autoCapitalize="words"
        autoComplete="name"
        blurOnSubmit={false}
        returnKeyType="next"
      />

      <Separator>Endereço</Separator>

      <Input
        first
        control={control}
        name="cep"
        label="CEP"
        editable={!submitting}
        onSubmitEditing={() => setFocus('neighborhood')}
        keyboardType="number-pad"
        blurOnSubmit={false}
        returnKeyType="next"
      />

      <Input
        control={control}
        name="state"
        label="Estado"
        editable={false}
      />

      <Input
        control={control}
        name="city"
        label="Cidade"
        editable={false}
      />

      <Input
        control={control}
        name="neighborhood"
        label="Bairro"
        editable={!submitting}
        onSubmitEditing={() => setFocus('address')}
        blurOnSubmit={false}
        returnKeyType="next"
      />

      <Input
        control={control}
        name="address"
        label="Rua"
        editable={!submitting}
        onSubmitEditing={() => setFocus('residentialNumber')}
        blurOnSubmit={false}
        returnKeyType="next"
      />

      <Input
        control={control}
        name="residentialNumber"
        label="Número"
        editable={!submitting}
        onSubmitEditing={() => setFocus('addressComplement')}
        keyboardType="number-pad"
        blurOnSubmit={false}
        returnKeyType="next"
      />

      <Input
        control={control}
        name="addressComplement"
        label="Complemento"
        editable={!submitting}
        onSubmitEditing={() => setFocus('email')}
        blurOnSubmit={false}
        returnKeyType="next"
      />

      <Separator>Contato</Separator>

      <Input
        first
        control={control}
        name="email"
        label="Email Principal"
        editable={!submitting}
        onSubmitEditing={() => setFocus('phoneNumber')}
        blurOnSubmit={false}
        returnKeyType="next"
      />
      <InputInfo>Esse é o principal e-mail de contato que temos com você. Ao alterá-lo, seu e-mail de login na plataforma não muda. Caso queira alterar o da plataforma, envie uma solicitação para a CSE (Central de Soluções Estudantis)</InputInfo>

      <Input
        control={control}
        name="phoneNumber"
        label="Telefone"
        onSubmitEditing={handleSubmit(onSubmit)}
        editable={!submitting}
        returnKeyType="done"
      />
    </Container>
  );
}
