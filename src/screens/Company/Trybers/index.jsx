import React from 'react';
import { Linking, ScrollView, useWindowDimensions } from 'react-native';
import { Dialog } from 'react-native-paper';
import { DialogScroll, Caption, ListItemContainer, ListItem, ListLinkedinBtn } from './styles';
import { Button } from '../../../components/Button';

export function Trybers({ company, visible, onClose }) {
  const { height } = useWindowDimensions();

  return (
    <Dialog
      visible={visible}
      style={{ maxHeight: height * 0.6 }}
      onDismiss={onClose}
    >
      <Dialog.Title>Trybers que trabalham na {company.name}</Dialog.Title>
      <DialogScroll style={{ paddingHorizontal: 0 }}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 16 }}>
          <Caption>
            Essas são as pessoas estudantes e formadas que trabalham na {company.name}. Você pode encontrá-las e entrar em contato pelo Linkedin
          </Caption>

          {company.students.map((student, index) => (
            <ListItemContainer key={`${student.id}-${index}`}>
              <ListItem numberOfLines={1}>•  {student.name}</ListItem>
              {student.linkedin && (
                <ListLinkedinBtn
                  icon="linkedin"
                  size={24}
                  onPress={() => Linking.openURL(student.linkedin)}
                />
              )}
            </ListItemContainer>
          ))}
        </ScrollView>
      </DialogScroll>
      <Dialog.Actions>
        <Button onPress={onClose}>
          Fechar
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}
