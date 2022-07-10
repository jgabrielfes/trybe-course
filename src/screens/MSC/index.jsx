import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, useTheme } from 'react-native-paper';
import { Documents } from './Documents';
import { Container, Title, Subtitle, Separator } from './styles';
import { MONTHS } from '../../utils/months';

export function MSC() {
  const navigation = useNavigation();
  const { colors } = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Appbar.Action
          iconColor={colors.primary}
          icon="help-circle-outline"
          onPress={() => Linking.openURL('https://app.betrybe.com/msc/faq')}
        />
      ),
    });
  }, []);

  return (
    <Container>
      <Title variant="displaySmall">Verificação de renda</Title>
      <Subtitle>
        Nosso compromisso é com o seu sucesso! Mantenha atualizadas as suas informações
        relacionadas ao Modelo de Sucesso Compartilhado para que você pague de forma
        justa e realista.
      </Subtitle>
      <Separator />
      <Title variant="titleLarge">
        {MONTHS[new Date().getMonth()]}
        {` `}
        de
        {` `}
        {new Date().getFullYear()}
      </Title>
      <Documents />
    </Container>
  );
}
