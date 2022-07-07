import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  ScrollContainer,
  SectionContainer,
  BottomContainer,
  Item,
  SubItem
} from './styles';
import { doChangeTheme } from '../../store/reducers/configs';
import { MaterialIcons } from '@expo/vector-icons';

export function DayDrawer({ descriptors }) {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.configs);
  const [{ navigation, route: { params: { siblings, sectionId, subSectionId } } }] = Object.values(descriptors);

  const handleContent = useCallback((sectionId, subSectionId) => {
    navigation.setParams({ sectionId, subSectionId });
    navigation.closeDrawer();
  }, []);

  if (!siblings) return null;

  return (
    <Container>
      <ScrollContainer contentContainerStyle={{ paddingVertical: 10 }}>
        {siblings[0].sections.map((section, index) => (
          <SectionContainer key={section.id}>
            <Item
              key={section.id}
              textColor={!sectionId && index === 0 ? 'primary' : section.id === sectionId ? 'primary' : 'onSurface'}
              contentStyle={{ justifyContent: 'flex-start' }}
              onPress={() => handleContent(section.id)}
            >
              {section.title}
            </Item>
            {section.sub_sections.map(subSection => (
              <SubItem
                key={subSection.id}
                icon="circle-medium"
                textColor={subSection.id === subSectionId ? 'primary' : 'onSurface'}
                contentStyle={{ justifyContent: 'flex-start' }}
                onPress={() => handleContent(section.id, subSection.id)}
              >
                {subSection.title}
              </SubItem>
            ))}
          </SectionContainer>
        ))}
      </ScrollContainer>
      <BottomContainer>
        <Item
          icon={props => <MaterialIcons {...props} name={`brightness-${theme === 'light' ? 4 : 7}`} />}
          textColor="onSurface"
          contentStyle={{ alignSelf: 'flex-start' }}
          onPress={() => dispatch(doChangeTheme())}
        >
          {`Modo ${theme === 'light' ? 'escuro' : 'claro'}`}
        </Item>
      </BottomContainer>
    </Container>
  );
}
