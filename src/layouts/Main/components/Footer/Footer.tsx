import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
//import { useTheme } from '@mui/material/styles';
import logo from '../../../../imagen/logo.png';
import Image from 'next/image';

const Footer = (): JSX.Element => {
  //const theme = useTheme();
  //const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="BUILD & DESIGN CONSTRUCTION INC"
            width={80}
          >
            <Image src={logo} alt="logo" width={200} height={50} />

          </Box>


          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>


            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/services"
                color="text.primary"
                variant={'subtitle2'}
              >
                Services
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/contact"
                color="text.primary"
                variant={'subtitle2'}
              >
                Contact Us
              </Link>
            </Box>

            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/about"
                color="text.primary"
                variant={'subtitle2'}
              >
                About Us
              </Link>
            </Box>

          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; BUILD & DESIGN CONSTRUCTION INC. 2024
        </Typography>

      </Grid>
    </Grid>
  );
};

export default Footer;
