import React from 'react';
import { Card } from './styles';
import { RocketImage } from '../../../assets/rocket';
import { CareerImage } from '../../../assets/career';

export function SupContent() {
  return (
    <>
      <Card
        horizontal
        Image={RocketImage}
        title="Vida Real"
        caption="Aprenda metodologias e práticas para resolver problemas reais do mercado de trabalho."
      />

      <Card
        last
        horizontal
        Image={CareerImage}
        title="Sua Carreira"
        caption="Veja conteúdos criados em parceria com empresas referência em recrutamento, conheça as empresas parceiras da Trybe e acesse vagas do mercado que selecionamos especialmente para trybers."
      />
    </>
  );
}
