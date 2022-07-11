import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { LoadingContainer, Loading, List, Card, NotFoundTitle, NotFoundCaption } from './styles';
import axios from 'axios';
import api from '../../../services/api';

export function Hirings({ query }) {
  const { user } = useSelector(state => state.configs);
  const { navigate } = useNavigation();
  const controller = new AbortController();

  const [viewContent, setViewContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const loadPage = useCallback(async (pageNumber = page, shouldRefresh) => {
    if (!shouldRefresh && total && pageNumber > total) return;
    setLoading(true);

    try {
      const companies = await api.companies(user.access_token, query, controller.signal);
      setTotal(Math.ceil(companies.length / 50));
      setViewContent(companies.slice(0, pageNumber * 50));
      setPage(pageNumber + 1);
      setLoading(false);
    } catch (err) {
      if (!axios.isCancel(err)) console.warn(err);
    }
  }, [query, page]);

  useEffect(() => {
    setViewContent([]);
    loadPage(1, true);
  }, [query]);

  useEffect(() => () => controller.abort(), []);

  if (viewContent.length === 0 && !loading) return (
    <>
      <NotFoundTitle variant="headlineSmall">Ainda não há empresas para a sua busca! 😢</NotFoundTitle>
      <NotFoundCaption>Por favor, ajuste os filtros e tente novamente.</NotFoundCaption>
    </>
  );

  return (
    <List
      data={viewContent}
      keyExtractor={project => project.id}
      onEndReached={() => loadPage()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && (
        <LoadingContainer elevation={5}>
          <Loading />
        </LoadingContainer>
      )}
      renderItem={({ item }) => (
        <Card
          company={item}
          onPress={() => navigate('companyDetails', { companyId: item.id })}
        />
      )}
    />
  );
}
