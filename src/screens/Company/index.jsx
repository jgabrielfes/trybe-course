import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  LoadingBackdrop,
  LogoSkeleton,
  Logo,
  Name,
  Separator,
  Title,
  Description
} from './styles';
import axios from 'axios';
import api from '../../services/api';

export function Company({ route }) {
  const { user } = useSelector(state => state.configs);
  const { companyId } = route.params;
  const [company, setCompany] = useState(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const data = await api.company(companyId, user.access_token, controller.signal);
        setCompany(data);
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }

    load();
    return () => controller.abort();
  }, []);

  if (!company) return <LoadingBackdrop size="large" />;

  return (
    <Container>
      {loadingLogo && company.logo && (
        <LogoSkeleton
          height={120}
          width={120}
        />
      )}

      {company.logo && (
        <Logo
          source={{ uri: company.logo }}
          onLoad={() => setLoadingLogo(false)}
        />
      )}

      <Name variant="headlineLarge">{company.name}</Name>

      <Separator />

      <Title variant="headlineSmall">Sobre</Title>
      <Description>{company.description}</Description>
    </Container>
  );
}
