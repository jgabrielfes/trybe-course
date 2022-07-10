import React from 'react';
import { Container, IconContainer, Icon, BoldText, Label, EditBtn } from './styles';

export function Documents() {
  return (
    <Container elevation={3}>
      <IconContainer>
        <Icon name="check" size={24} />
      </IconContainer>
      <BoldText variant="titleMedium">Você já enviou seus documentos!</BoldText>
      <Label>
        Caso seja necessária alguma correção após análise, você pode editar o envio.
      </Label>
      <EditBtn
        mode="contained-tonal"
        icon="pencil"
        onPress={() => undefined}
      >
        Editar
      </EditBtn>
    </Container>
  );
}
