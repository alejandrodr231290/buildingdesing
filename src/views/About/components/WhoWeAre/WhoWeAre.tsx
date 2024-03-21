/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>

      <Box marginBottom={4}>
        <Box marginBottom={2}>

          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >


            <Typography
              marginBottom={2}
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
              ABOUT US
            </Typography>
          </Typography>
        </Box>
      </Box>




      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography align={'center'} variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              MISSION
            </Typography>
            <Typography
              variant="h6"
              component="p"

              color="text.secondary"
              sx={{ fontWeight: 400 }}

            >
              We are a design and construction company focused on the development and execution of architectural, engineering, mechanical, electrical, plumbing, fire alarm and sprinkler systems projects. We work for the public and private sector with commercial and residential designs. We seek to satisfy customer needs at all stages of the project.
            </Typography>

          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography align={'center'} variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              VISION
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}

            >
              We are a company in constant growth, which seeks to become a national reference in terms of design, execution, quality and efficiency, complying in time with each of the assigned projects. We seek to improve ourselves at all times with the commitment to innovate and respond to new needs of society.
            </Typography>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
