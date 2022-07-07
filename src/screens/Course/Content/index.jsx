import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Title, Subtitle, Card } from './styles';
import { FundamentalsImage } from '../../../assets/fundamentals';
import { FrontEndImage } from '../../../assets/front';
import { BackEndImage } from '../../../assets/back';
import { ComputerScienceImage } from '../../../assets/science';
import { SoftSkillsImage } from '../../../assets/soft';
import { LiveLecturesImage } from '../../../assets/lectures';

export function Content() {
  const { navigate } = useNavigation();

  return (
    <>
      <Title variant="displaySmall">
        Conteúdo
      </Title>
      <Subtitle>
        Acesse a agenda de cada módulo abaixo, ou continue aprendendo com nossas aulas ao vivo e trilha de Soft Skills.
      </Subtitle>

      <Card
        Image={FundamentalsImage}
        title="Fundamentos do Desenvolvimento Web"
        subtitle="Módulo 1"
        onPress={() => navigate('calendar', {
          module: 'fundamentals',
          description: 'Nosso primeiro módulo te ensinará tudo que você precisa saber para iniciar sua carreira no mundo do desenvolvimento Web, virando uma pessoa preparada para os módulos de front-end e back-end. Vamos te guiar, etapa a etapa, por toda essa jornada!',
        })}
      />

      <Card
        Image={FrontEndImage}
        title="Desenvolvimento Front-end"
        subtitle="Módulo 2"
        onPress={() => navigate('calendar', {
          module: 'front-end',
          description: 'Neste módulo, você vai aprender as técnicas e ferramentas mais atuais para desenvolver um código de front-end que seja rápido, bonito e testável.',
        })}
      />

      <Card
        Image={BackEndImage}
        title="Desenvolvimento Back-end"
        subtitle="Módulo 3"
        onPress={() => navigate('calendar', {
          module: 'back-end',
          description: 'Neste módulo, você vai aprender como desenvolver um código de back-end robusto, limpo, escalável e seguro, dominando o uso de bancos de dados, a construção de APIs com testes automatizados.',
        })}
      />

      <Card
        Image={ComputerScienceImage}
        title="Ciência da Computação"
        subtitle="Módulo 4"
        onPress={() => navigate('calendar', {
          module: 'computer-science',
          description: 'Aqui você aprenderá os principais conceitos da Ciência da Computação que são aplicados no dia a dia do desenvolvimento de software e como transformar a teoria em prática, analisando algoritmos e escolhendo as melhores estruturas de dados para resolver os problemas!',
        })}
      />

      <Card
        horizontal
        Image={SoftSkillsImage}
        title="Soft Skills"
        caption="Aprenda e desenvolva as habilidades socioemocionais mais requisitadas para a carreira de Desenvolvimento Web"
      />

      <Card
        last
        horizontal
        Image={LiveLecturesImage}
        title="Aulas ao Vivo"
        caption="Reveja as gravações de aulas ao vivo da sua turma ou aprofunde seus estudos assistindo aulas de outras turmas. A escolha é sua!"
      />
    </>
  );
}
