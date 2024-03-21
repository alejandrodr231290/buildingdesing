import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MailAppIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const mock = [
  {
    name: 'Miss Alicia',
    title: 'Permit processing, status & legal issues',
    cell: 'https://wa.me/+13015008110',
    mail: 'mailto:aliciabuilddesigninc@gmail.com',


  },

  {
    name: 'Ms Roger',
    title: 'Office Manage, Project Manager & Inspections on site all jobs',
    cell: 'https://wa.me/+13013002011',
    mail: 'mailto:rogerrenovationsexpert@gmail.com ',


  },
  {
    name: 'Ms Oscar',
    title: 'Office Manage, Wssc permits & Inspection',
    cell: 'https://wa.me/+12403806744',
    mail: 'mailto:oscarrenovationsexpert@gmail.com',

  },
  {
    name: 'Miss Tania',
    title: 'Office Manager & Permits Processing    - ',
    cell: 'https://wa.me/+12407628944',
    mail: 'mailto:taniarenovationsexpert@gmail.com',


  },


];

const mock2 = [
  {
    name: 'Miss Johjana',
    title: 'Permit processing, status & Inspections',
    cell: 'https://wa.me/+12409568718',
    mail: 'mailto:johjanarenovationsexpert@gmail.com',

  },
  {
    name: 'Ms Jose',
    title: 'Permit processing, status & legal issues',
    cell: 'https://wa.me/+12404702530',
    mail: 'mailto:joseabuildanddesigninc@gmail.com',

  },
  {
    name: 'Hilary',
    title: 'Permit processing, status & legal issues',
    cell: 'https://wa.me/+13015414628',
    mail: 'mailto:hilarybuilddesigninc@gmail.com',
  },
];
const mock3 = [
  {
    name: 'Miss Laura',
    title: 'Estimates & Building Permits',
    cell: 'https://wa.me/+13013510793',
    mail: 'mailto:laurabuilddesigninc@gmail.com',


  },
  {
    name: 'Ms Mauricio',
    title: 'Drawings & Building Permits',
    cell: 'https://wa.me/+13013886519',
    mail: 'mailto:mauriciobuilddesign@gmail.com',


  },
  {
    name: 'Ms Edwin',
    title: 'Drawings, Estimates & Consultation',
    cell: 'https://wa.me/+13018755724',
    mail: 'mailto:edwinbuilddesigninc@gmail.com',

  },
  {
    name: 'Ms Juan Carlos',
    title: 'Drawings, Estimates & Consultation',
    cell: 'https://wa.me/+12408026059',
    mail: 'mailto:juancarlosbuilddesign@gmail.com',

  },

];







const Team = (): JSX.Element => {
  const theme = useTheme();
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
            Contact the company's work team
          </Typography>

        </Box>
      </Box>
      <Box marginBottom={4} >
        <Typography
          fontWeight={700}
          variant={'h4'}
          color={'primary'}
          align={'center'}
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom

        >

        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'} bgcolor={'alternate.main'} >
          Permits Department
        </Typography>
      </Box>

      <Box marginBottom={2}>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                component={Card}
                boxShadow={2}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <CardContent>

                  <Box marginTop={4}>
                    <ListItemText primary={item.name} secondary={item.title} />

                    <Box marginTop={4}>

                      <IconButton size={'small'} color={'primary'} href={item.cell}>
                        <WhatsAppIcon />
                      </IconButton>
                      <IconButton size={'small'} color={'primary'} href={item.mail}>
                        <MailAppIcon />
                      </IconButton>

                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box marginBottom={4} >
        <Grid container spacing={2}>
          {mock2.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                component={Card}
                boxShadow={2}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <CardContent>

                  <Box marginTop={4}>
                    <ListItemText primary={item.name} secondary={item.title} />

                    <Box marginTop={4}>
                      <IconButton size={'small'} color={'primary'} href={item.cell}>
                        <WhatsAppIcon />
                      </IconButton>
                      <IconButton size={'small'} color={'primary'} href={item.cell}>
                        <MailAppIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>




      <Box marginBottom={4} bgcolor={'alternate.main'}>
        <Typography fontWeight={700} variant={'h4'} align={'center'} >
          Permits Department
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Grid container spacing={2}>
          {mock3.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                component={Card}
                boxShadow={2}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <CardContent>
                  <Box marginTop={4}>
                    <ListItemText primary={item.name} secondary={item.title} />
                    <Box marginTop={4}>
                      <IconButton size={'small'} color={'primary'} href={item.cell}>
                        <WhatsAppIcon />
                      </IconButton>
                      <IconButton size={'small'} color={'primary'} href={item.cell}>
                        <MailAppIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>





    </Box>
  );
};

export default Team;
