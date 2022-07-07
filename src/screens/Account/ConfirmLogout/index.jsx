import React from 'react';
import { Dialog, Paragraph } from 'react-native-paper';
import { Button } from '../../../components/Button';

export function ConfirmLogout({ name, visible, onConfirm, onCancel }) {
  return (
    <Dialog visible={visible} onDismiss={onCancel}>
      <Dialog.Title>{name}</Dialog.Title>
      <Dialog.Content>
        <Paragraph>Tem certeza que deseja sair da Trybe?</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onCancel}>
          Cancelar
        </Button>
        <Button textColor="errorContainer" onPress={onConfirm}>
          Sair
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}
