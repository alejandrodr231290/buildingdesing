import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { ListService } from './components';

const CareerOpening = (): JSX.Element => {
  return (
    <Main>
      <Container>
        <ListService />
      </Container>
    </Main>
  );
};

export default CareerOpening;
