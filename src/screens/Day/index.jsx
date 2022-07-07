import React, { useEffect, useState } from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { Container, LoadingBackdrop, Content } from './styles';
import axios from 'axios';
import api from '../../services/api';

export function Day({ navigation, route }) {
  const { chapter, sectionId, subSectionId } = route.params;
  const { colors } = useTheme();
  const [data, setData] = useState(null);
  const [content, setContent] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    async function load() {
      try {
        const { data, meta } = await api.chapter(chapter.content_id, controller.signal);
        const siblings = meta.siblings.filter(s => s.content_id === data.content_id && s.sections.length > 0);
        setData(data);
        setContent(data.raw_content);
        if (siblings.length > 0) {
          navigation.setOptions({ swipeEnabled: true });
          navigation.setParams({ siblings });
          navigation.getParent().setOptions({
            headerLeft: () => (
              <Appbar.Action
                iconColor={colors.primary}
                icon="table-of-contents"
                onPress={navigation.toggleDrawer}
              />
            ),
          });
        }
      } catch (err) {
        if (!axios.isCancel(err)) console.warn(err);
      }
    }
    load();

    return () => controller.abort;
  }, []);

  useEffect(() => {
    if (sectionId) {
      const section = data.sections.find(s => s.id === sectionId);
      setContent(section.raw_content);
      if (subSectionId) {
        const subSection = section.sub_sections.find(ss => ss.id === subSectionId);
        setContent(subSection.raw_content);
      }
    }
  }, [sectionId, subSectionId]);

  return !content ? (
    <LoadingBackdrop size="large" />
  ) : (
    <Container>
      <Content>{content}</Content>
    </Container>
  );
}
