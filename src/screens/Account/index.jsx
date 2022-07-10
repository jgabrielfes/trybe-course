import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Appbar, useTheme } from 'react-native-paper';
import {
  LoadingBackdrop,
  Container,
  Title,
  Subtitle,
  Separator,
  LabelContainer,
  LabelIcon,
  Label,
  LogoutContainer,
  LogoutBtn
} from './styles';
import { ConfirmLogout } from './ConfirmLogout';
import { Alert } from '../../components/Alert';
import { setUser } from '../../store/reducers/configs';
import axios from 'axios';
import api from '../../services/api';

export function Account() {
  const navigation = useNavigation();
  const route = useRoute();
  const [alertVisible, setAlertVisible] = useState(false);
  const [profile, setProfile] = useState(null);
  const [confirmLogout, setConfirmLogout] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.configs);
  const { colors } = useTheme();
  const controller = new AbortController();

  const load = useCallback(async () => {
    try {
      setProfile(null);
      const profile = await api.profile(user.id, user.access_token, controller.signal);
      setProfile(profile);
      navigation.setOptions({
        headerRight: () => (
          <Appbar.Action
            iconColor={colors.primary}
            icon="account-edit"
            onPress={() => navigation.navigate('editAccount', { profile })}
          />
        ),
      })
    } catch (err) {
      if (!axios.isCancel(err)) console.warn(err);
    }
  }, []);

  useEffect(() => {
    load();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (route.params?.alert) {
      setAlertVisible(true);
      load();
      return () => navigation.setParams({ alert: null });
    }
  }, [route.params]);

  return (
    <>
      {!profile ? (
        <LoadingBackdrop size="large" />
      ) : (
        <Container>
          <Title variant="headlineLarge">{profile.name}</Title>

          <Subtitle variant="titleMedium">{profile.full_name}</Subtitle>

          <Separator />

          <LabelContainer>
            <LabelIcon name="location-pin" size={30} />
            <Label>
              {profile.address}, {profile.residential_number}, {profile.neighborhood} / {profile.city} - {profile.state}
            </Label>
          </LabelContainer>

          <LabelContainer>
            <LabelIcon name="mail-outline" size={30} />
            <Label>
              {profile.email}
            </Label>
          </LabelContainer>

          <LabelContainer last>
            <LabelIcon name="phone" size={30} />
            <Label>
              {profile.phone_number}
            </Label>
          </LabelContainer>

          <Separator />

          <LogoutContainer>
            <LogoutBtn
              mode="contained"
              buttonColor="errorContainer"
              textColor="onErrorContainer"
              onPress={() => setConfirmLogout(true)}
            >
              Sair
            </LogoutBtn>
          </LogoutContainer>

          <ConfirmLogout
            name={profile.name}
            visible={confirmLogout}
            onConfirm={() => dispatch(setUser(null))}
            onCancel={() => setConfirmLogout(false)}
          />

        </Container>
      )}
      <Alert
        mode="success"
        icon="checkbox-marked-circle-outline"
        visible={alertVisible}
        onDismiss={() => setAlertVisible(false)}
      >
        Dados alterados com sucesso
      </Alert>
    </>
  );
}