import React, { useCallback, useState } from 'react';
import { Container } from './styles';
import { Hirings } from './Hirings';
import { Searchbar } from './Searchbar';

export function HiringPartners({ showSearchbar, setSearchbarOpen }) {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(q => {
    setQuery(q);
    setSearchbarOpen(false);
  }, []);

  return (
    <Container>
      <Hirings query={query} />
      <Searchbar
        show={showSearchbar}
        setOpen={setSearchbarOpen}
        onSubmit={handleSearch}
      />
    </Container>
  );
}
