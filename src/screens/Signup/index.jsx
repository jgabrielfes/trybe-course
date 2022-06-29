import React, { useCallback, useState } from 'react';
import { Container, Header, HeaderTitle, Title } from './styles';
import { FirstForm } from './FirstForm';
import { SecondForm } from './SecondForm';

export function Signup() {
  const [currentForm, setCurrentForm] = useState('first');
  const [firstForm, setFirstForm] = useState({ name: '', email: '' });

  const onFirstSubmit = useCallback(form => {
    console.log(form);
    setFirstForm(form);
    setCurrentForm('second');
  }, []);

  const onSecondSubmit = useCallback(password => {
    console.log(password);
  }, []);

  return (
    <Container>
      <Header elevation={2}>
        <HeaderTitle variant="headlineLarge">
          A porta de entrada para sua carreira em tecnologia
        </HeaderTitle>
      </Header>
      <Title variant="headlineLarge">
        Crie sua conta na Trybe
      </Title>
      <Title>
        Leva menos de 1 minuto!
      </Title>
      {currentForm === 'first' ? (
        <FirstForm defaultValues={firstForm} onSubmit={onFirstSubmit} />
      ) : (
        <SecondForm doBackForm={() => setCurrentForm('first')} onSubmit={onSecondSubmit} />
      )}
    </Container>
  );
}
