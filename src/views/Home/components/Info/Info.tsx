/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Avatar from '@mui/material/Avatar';
//import Grid from '@mui/material/Grid';



const Services = (): JSX.Element => {
  const theme = useTheme();
  return (


    <Box
      data-aos={'fade'}
      data-aos-delay={0}
      data-aos-offset={0}
      data-aos-duration={100} >
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
          WE BUILD YOUR DREAMS!!!
        </Typography>
      </Typography>


      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
        At BUILD & DESIGN CONSTRUCTION INC. We pride ourselves on providing consulting, design, drafting and construction services. Let us take all the stress and hassle out of your next construction project. We have extensive experience in the field of home remodeling, including kitchen and bathroom renovations that will amaze you.
      </Typography>
    </Box>




  );
};

export default Services;
