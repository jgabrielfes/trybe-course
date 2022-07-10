import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { LoadingContainer, Loading, List, Card } from './styles';
import axios from 'axios';
import api from '../../../services/api';

export function Hirings() {
  const { user } = useSelector(state => state.configs);
  const { navigate } = useNavigation();
  const controller = new AbortController();

  const [viewContent, setViewContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const loadPage = useCallback(async (pageNumber = page) => {
    if (total && pageNumber > total) return;

    setLoading(true);

    try {
      const companies = await api.companies(user.access_token, controller.signal);
      setTotal(Math.ceil(companies.length / 10));
      setViewContent(companies.slice(0, pageNumber * 10));
      setPage(page + 1);
      setLoading(false);
    } catch (err) {
      if (!axios.isCancel(err)) console.warn(err);
    }
  }, [page]);

  useEffect(() => {
    loadPage();
    return () => controller.abort();
  }, []);

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
