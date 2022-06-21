import React from 'react';
import { Container, ErrorContainer, ErrorIcon, ErrorLabel } from './styles';
import { TextInput } from 'react-native-paper';
import { Controller } from 'react-hook-form';

export function ControlledInput({ control, name, ...rest }) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ...controllerRest }, fieldState: { error } }) => (
          <>
            <TextInput
              {...rest}
              onChangeText={onChange}
              {...controllerRest}
            />
            {!!error && (
              <ErrorContainer>
                <ErrorIcon name="error-outline" />
                <ErrorLabel type="error">{error.message}</ErrorLabel>
              </ErrorContainer>
            )}
          </>
        )}
      />
    </Container>
  );
}
