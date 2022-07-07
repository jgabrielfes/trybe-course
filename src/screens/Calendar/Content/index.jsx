import React from 'react';
import { Container, ListContainer, Section, Item } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Content({ content }) {
  const navigation = useNavigation();

  return (
    <ListContainer>
      {content.blocks.map(block => (
        <Container key={block.id}>
          <Section
            id={block.block_order}
            title={block.name}
            description={`Bloco ${block.block_order.toString().padStart(2, '0')}`}
          >
            {block.chapters.map(chapter => (
              <Item
                key={chapter.content_id}
                title={chapter.title}
                description={`Dia ${chapter.order.toString().padStart(2, '0')}`}
                onPress={() => navigation.navigate('day', { chapter })}
              />
            ))}
          </Section>
        </Container>
      ))}
    </ListContainer >
  );
}
