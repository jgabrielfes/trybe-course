import React, { useCallback, useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { FAB } from 'react-native-paper';
import { useSelector } from 'react-redux';
import {
  Container,
  LoadingBackdrop,
  LogoSkeleton,
  Logo,
  Name,
  Separator,
  TryberButton,
  Title,
  Description
} from './styles';
import { Trybers } from './Trybers';
import { LogoImage } from '../../assets/logo';
import axios from 'axios';
import api from '../../services/api';

function getAdjustedFABActions(company) {
  const social = [
    { key: 'facebook_page', icon: 'facebook', label: 'Facebook' },
    { key: 'instagram_page', icon: 'instagram', label: 'Instagram' },
    { key: 'linkedin_page', icon: 'linkedin', label: 'Linkedin' },
    { key: 'website', icon: 'web', label: 'Website' },
    { key: 'youtube_page', icon: 'youtube', label: 'YouTube' },
  ];

  const actions = social.reduce((acc, cur) => {
    if (company[cur.key]) acc.push({
      icon: cur.icon,
      label: cur.label,
      onPress: () => Linking.openURL(company[cur.key]),
    });

    return acc;
  }, []);

  return actions.length === 0 ? null : actions;
}

export function Company({ route }) {
  const { user } = useSelector(state => state.configs);
  const { companyId } = route.params;
  const [socialOpen, setSocialOpen] = useState(false);
  const [trybersOpen, setTrybersOpen] = useState(false);
  const [company, setCompany] = useState(null);
  const [loadingLogo, setLoadingLogo] = useState(true);
  const controller = new AbortController();

  const handleTrybers = useCallback(() => {
    setTrybersOpen(true);
  }, []);

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

  const studentsLength = company.students.length;

  return (
    <>
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

        <TryberButton
          icon={() => <LogoImage width={20} height={23} />}
          textColor="onSurface"
          mode="text"
          onPress={studentsLength > 0 ? handleTrybers : undefined}
        >
          {studentsLength} Tryber{studentsLength === 1 ? '' : 's'} trabalha{studentsLength === 1 ? '' : 'm'} aqui
        </TryberButton>

        <Separator />

        <Title variant="headlineSmall">Sobre</Title>
        <Description>{company.description}</Description>
      </Container>
      {!!getAdjustedFABActions(company) && (
        <FAB.Group
          open={socialOpen}
          icon={socialOpen ? 'close' : 'card-account-details'}
          actions={getAdjustedFABActions(company)}
          onStateChange={({ open }) => setSocialOpen(open)}
          theme={{ colors: { primary: 'red' } }}
        />
      )}
      <Trybers
        company={company}
        visible={trybersOpen}
        onClose={() => setTrybersOpen(false)}
      />
    </>
  );
}
