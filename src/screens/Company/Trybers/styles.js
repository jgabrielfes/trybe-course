import styled from 'styled-components/native';
import { Dialog, Paragraph, IconButton } from 'react-native-paper';

export const DialogScroll = styled(Dialog.ScrollArea)`
  padding: 0;
`;

export const Caption = styled(Paragraph)`
  margin-bottom: 16px;
`;

export const ListItemContainer = styled.View`
  align-items: center;
  flex-direction: row;
  height: 28px;
  justify-content: space-between;
  padding-left: 12px;
`;

export const ListItem = styled(Paragraph)`
  flex: 1;
`;

export const ListLinkedinBtn = styled(IconButton)`
`;
