import React, { useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { Searchbar as PSearchbar } from 'react-native-paper';
import { Container } from './styles';
import { Extrapolate, interpolate, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export function Searchbar({ show, setOpen, onSubmit }) {
  const [query, setQuery] = useState('');
  const searchBar = useRef();

  const top = useSharedValue(-80);
  const style = useAnimatedStyle(() => ({
    top: top.value,
    opacity: interpolate(top.value, [-80, 0], [0, 1], Extrapolate.CLAMP),
  }));

  useEffect(() => {
    top.value = withTiming(show ? 0 : -80);
    if (show) {
      searchBar.current.focus();
    } else {
      Keyboard.dismiss();
    }
  }, [show]);

  useEffect(() => () => setOpen(false), []);

  return (
    <Container style={style}>
      <PSearchbar
        ref={searchBar}
        clearIcon={!query}
        placeholder="Buscar"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => onSubmit(query)}
      />
    </Container>
  );
}
