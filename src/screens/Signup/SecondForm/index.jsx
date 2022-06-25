import React, { useCallback, useState } from 'react';
import { TextInput } from 'react-native-paper';
import {
  Container,
  Input,
  RequireLabelContainer,
  RequireIcon,
  RequireLabel,
  BtnsContainer,
  BackBtn,
  SubmitBtn
} from './styles';

const ERRORS_LABELS = [
  { primary: 'mínimo de 8 caracteres', condition: value => value.length < 8 },
  { primary: 'uma letra maiúscula', condition: value => !/[A-Z]/.test(value) },
  { primary: 'uma letra minúscula', condition: value => !/[a-z]/.test(value) },
  { primary: 'um número', condition: value => !/[0-9]/.test(value) },
  {
    primary: 'um caracter especial:',
    secondary: '! @ # $ % ^ & * ( ) - _ = + { } ; : , < . >',
    condition: value => !/[!@#$%^&*()\-_=+{};:,<.>]/.test(value),
  },
];

export function SecondForm({ doBackForm, onSubmit }) {
  const [edited, setEdited] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = useCallback(password => {
    if (!edited) setEdited(true);
    setPassword(password);
  });

  return (
    <Container>
      <Input
        label="Senha"
        onSubmitEditing={() => onSubmit(password)}
        onChangeText={handlePassword}
        autoFocus
        returnKeyType="done"
        textContentType="newPassword"
        keyboardType="ascii-capable"
        secureTextEntry={!showPassword}
        right={(
          <TextInput.Icon
            name={showPassword ? 'eye-off' : 'eye'}
            forceTextInputFocus={false}
            onPress={() => setShowPassword(prev => !prev)}
          />
        )}
      />
      {ERRORS_LABELS.map((label, index) => (
        <RequireLabelContainer key={`error-label-${index}`}>
          <RequireIcon
            error={label.condition(password) && edited}
            name={label.condition(password) && edited ? 'error-outline' : 'horizontal-rule'}
          />
          <RequireLabel type={label.condition(password) && edited ? 'error' : 'info'}>
            {label.primary}
          </RequireLabel>
          {label.secondary && (
            <RequireLabel fullWidth type={label.condition(password) && edited ? 'error' : 'info'}>
              {label.secondary}
            </RequireLabel>
          )}
        </RequireLabelContainer>
      ))}
      <BtnsContainer>
        <BackBtn
          textColor="onSecondary"
          mode="outlined"
          onPress={doBackForm}
        >
          Voltar
        </BackBtn>
        <SubmitBtn
          buttonColor="secondary"
          textColor="onSecondary"
          disabled={Object.values(ERRORS_LABELS).some(label => label.condition(password))}
          mode="contained"
          onPress={() => onSubmit(password)}
        >
          Criar conta
        </SubmitBtn>
      </BtnsContainer>
    </Container>
  );
}
