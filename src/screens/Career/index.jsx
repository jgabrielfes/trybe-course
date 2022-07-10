import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Subtitle, Card } from './styles';
import { ContentsImage } from '../../assets/career/contents';
import { CompaniesImage } from '../../assets/career/companies';
import { JobsImage } from '../../assets/career/jobs';

export function Career() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title variant="displaySmall">Nosso trabalho é te ajudar a conseguir o seu!</Title>
      <Subtitle>Aqui você irá encontrar tudo o que precisa para iniciar a sua carreira.</Subtitle>

      <Card
        Image={ContentsImage}
        title="Conteúdos"
        caption="Aprenda como começar sua carreira com conteúdos escolhidos para você!"
        onPress={() => undefined}
      />

      <Card
        Image={CompaniesImage}
        title="Empresas Parceiras"
        caption="Conheça o nosso programa de parceria e as empresas que fazem parte dele."
        onPress={() => navigate('hiringPartners')}
      />

      <Card
        last
        Image={JobsImage}
        title="Vagas de Trabalho"
        caption="Nós selecionamos as melhores vagas do mercado para facilitar a sua busca"
        onPress={() => undefined}
      />
    </Container>
  );
}
