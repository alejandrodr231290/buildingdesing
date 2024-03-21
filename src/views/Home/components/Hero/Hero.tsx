/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import transp from '../../../../imagen/transp.png';
import Image from 'next/image';

const Hero = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (


    <Grid container spacing={2}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box
        
        
        >
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Ou dream, {' '}
              <Typography
                component={'span'}
                variant={'inherit'}
                color={'primary'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                we do it.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={2}>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              BUILD & DESIGN CONSTRUCTION INC.
            </Typography>
          </Box>

        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            filter:
              theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
          }}
        >
          <Image src={transp} alt="logo" width={400} height={400} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
