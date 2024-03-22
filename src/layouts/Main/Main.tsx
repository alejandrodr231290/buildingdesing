import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
//import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import TopNav from 'components/TopNav';

import { Topbar, MobileMenu, Footer } from './components';

import pages from '../navigation';

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenuClick = (): void => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const open = isMd ? false : openMobileMenu;

  return (
    <Box bgcolor={'alternate.main'}>
      <Box position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box flexGrow={1} />
            <TopNav />
          </Box>
        </Container>
      </Box>
      <AppBar 
        position={'static'}
        sx={{
          top: 0,
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={0}
      >
        <Container paddingY={1}>
          <Topbar handleMobileMenuClick={handleMobileMenuClick} pages={pages} />
        </Container>
      </AppBar>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Container paddingY={0}>
          <MobileMenu pages={pages} />
        </Container>
      </Collapse>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
