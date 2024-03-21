import React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import ThemeModeToggler from 'components/ThemeModeToggler';
import { Grid, IconButton } from '@mui/material';
import MailAppIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface Props {
  colorInvert?: boolean;
}


const TopNav = ({ colorInvert = false }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  return (

    <Grid container >
      <Grid item container justifyContent={'flex-center'} alignItems={'center'} xs={10} md={10}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent={'space-between'}
          marginBottom={1}
          color={mode === 'light' ? 'primary' : 'secondary'}
        >

          <Box marginLeft={3}>
            <IconButton size={'small'} color={'primary'} href='https://wa.me/+12406697199'>
              <WhatsAppIcon />

              <Typography color="text.primary"  >
                (240) 669-7199
              </Typography>

            </IconButton>

            <IconButton size={'small'} color={'primary'} href='mailto:builddesigninc@gmail.com'>
              <MailAppIcon />
              <Typography color="text.primary"  >
                builddesigninc@gmail.com
              </Typography>
            </IconButton>
            <IconButton size={'small'} color={'primary'} href='mailto:info@mechanicalelectricalinc.com'>
              <MailAppIcon />
              <Typography color="text.primary"  >
                info@mechanicalelectricalinc.com
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </Grid>

      <Grid item container justifyContent={'flex-end'} xs={2} md={2}>
        <Box >
          <ThemeModeToggler />
        </Box>
      </Grid>
    </Grid>







  );
};

export default TopNav;
