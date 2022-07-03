import React from 'react';
import { Container, ListContainer, Section, Item } from './styles';
import contents from '../../../utils/contents.json';
import { useNavigation } from '@react-navigation/native';

export function Content({ name }) {
  const content = contents[name];
  const navigation = useNavigation();

  return (
    <ListContainer>
      {content.map((section, index) => (
        <Container key={`content-section-${index}`}>
          <Section
            id={index + 1}
            title={section.name}
            description={`Bloco 0${index + 1}`}
          >
            {section.content.map((item, index) => (
              <Item
                key={`content-item-${index}`}
                title={item.name}
                onPress={() => navigation.navigate('day')}
              />
            ))}
          </Section>
        </Container>
      ))}
    </ListContainer >
  );
}
