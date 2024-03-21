import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Team } from './components';

const AboutSideCover = (): JSX.Element => {
  return (
    <Main>
      <Box>
        
        <Container>
          <Team />
        </Container>
      </Box>
    </Main>
  );
};

export default AboutSideCover;
