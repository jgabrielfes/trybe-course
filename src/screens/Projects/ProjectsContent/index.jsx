import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { LoadingContainer, Loading, Container, Progress, Section, Icon } from './styles';
import axios from 'axios';
import api from '../../../services/api';

function getAdjustedDescription(deadline) {
  const date = new Date(deadline);
  const dateString = date.toLocaleDateString();
  const hourString = date.getHours();
  return `${dateString} | ${hourString}h`;
}

export function ProjectsContent() {
  const [viewContent, setViewContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { user } = useSelector(state => state.configs);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const controller = new AbortController();

  const loadPage = useCallback(async (pageNumber = page) => {
    if (total && pageNumber > total) return;

    setLoading(true);

    try {
      const projects = await api.projects(user.access_token, controller.signal);
      setTotal(Math.ceil(projects.length / 10));
      setViewContent(projects.slice(0, pageNumber * 10));
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
    <FlatList
      data={viewContent}
      keyExtractor={project => project.id}
      contentContainerStyle={{ paddingTop: 20 }}
      onEndReached={() => loadPage()}
      onEndReachedThreshold={0.1}
      ListFooterComponent={loading && (
        <LoadingContainer elevation={5}>
          <Loading />
        </LoadingContainer>
      )}
      renderItem={({ item }) => (
        <Container>
          <Progress progress={item.required_requirements.percentage} />
          <Section
            key={item.id}
            title={item.display_name}
            description={getAdjustedDescription(item.deadline)}
            onPress={() => navigation.navigate('project', { project: item })}
            right={() => item.active && <Icon name="circle" color={colors.error} />}
          />
        </Container >
      )}
    />
  );
}
