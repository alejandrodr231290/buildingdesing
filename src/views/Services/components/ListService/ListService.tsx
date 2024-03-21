/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const mock = [
  {
    title: 'CONSTRUCTION',
    features: [
      'New construction',
      'Renovations',
      'New homes',
      'Additions',
      'Porch, Deck and patio',
      'Finish Basement',
      'Interior Remodeling',
      'Installation',
    ],
    isHighlighted: true,
  },
  {
    title: 'DESIGN & DRAWING',

    features: [
      'Architectural',
      'Interior Design',
      '3D Rendering',
      'Engineering and Calculations',
      'Plat Survey',
      'Systems (MEP, Sprinkler,fire alarm, fire suppressionHVAC, AC Manual J8) ',
      'Stop of Work. Help & More',

    ],
    isHighlighted: true,
  },
  {
    title: 'CONSULTING & PERMIT',
    price: '$77',
    features: [
      'Permit application',
      'Online application',
      'Inspections',
      'Building',
      'Mechanical',
      'Electrical',
      'Plumbing',
      'Sprinkler',
      'Fire suppression',
      'Fire Alarm',
      'HVAC',
      'Demolition',
      'Correction Order',
      'Running permit',
    ],
    isHighlighted: true,
  },
];
const WhoWeAre = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box
        marginBottom={2}
        sx={{
          position: 'relative',
          '&::after': {
            position: 'absolute',
            content: '""',
            width: '30%',
            zIndex: 1,
            top: 0,
            right: 0,
            height: '100%',
            backgroundSize: '18px 18px',
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4,
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position="relative" zIndex={2}>
          <Typography
            fontWeight={600}
            variant={'h2'}
            gutterBottom
            align={'center'}
            color={'primary'}
          >
            COMMERCIAL AND RESIDENTIAL SERVICES
          </Typography>

        </Box>
      </Box>



      <Box>

        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={Card}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                boxShadow={item.isHighlighted ? 4 : 0}
              >
                <CardContent
                  sx={{
                    padding: 4,
                  }}
                >
                  <Box
                    marginBottom={4}
                    display={'flex'}
                    justifyContent={'space-between'}
                  >
                    <Typography variant={'h4'}>
                      <Box component={'span'} fontWeight={600}>
                        {item.title}
                      </Box>
                    </Typography>

                  </Box>
                  <Grid container spacing={1}>
                    {item.features.map((feature, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}
                        >
                          <Box
                            component={ListItemAvatar}
                            minWidth={'auto !important'}
                            marginRight={2}
                          >
                            <Box
                              component={Avatar}
                              bgcolor={theme.palette.secondary.main}
                              width={20}
                              height={20}
                            >
                              <svg
                                width={12}
                                height={12}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Box>
                          </Box>
                          <ListItemText primary={feature} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>


              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhoWeAre;
