import React from 'react';


import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Story,
  WhoWeAre,
} from './components';

const About = (): JSX.Element => {
  return (
    <Main >
      <Container>
        <WhoWeAre />
      </Container>

      <Container>
        <Story />
      </Container>



    </Main>
  );
};

export default About;
