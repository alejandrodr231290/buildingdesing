import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
//import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
////import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import img1 from '../../../../imagen/im1.jpg';
import img2 from '../../../../imagen/im2.jpg';
import img3 from '../../../../imagen/im3.jpg';
import img4 from '../../../../imagen/im4.jpg';
import img5 from '../../../../imagen/im5.jpg';
import img6 from '../../../../imagen/im6.jpg';




const Articles = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={2}>
        <Typography
          variant="h4"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >

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
            Gallery
          </Typography>
        </Typography>
      </Box>
      <Box
        data-aos={'fade-up'}
        maxWidth={{ xs: 420, sm: 620, md: 1 }}
        margin={'0 auto'}
      >
        <Slider {...sliderOpts}>
          <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >

                <CardContent>

                  <Typography align={'left'} color={'text.secondary'}>
                    <Image src={img1} alt="" width={400} height={400} />
                  </Typography>
                </CardContent>


              </Box>
            </Box>
          </Box>
          <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >

                <CardContent>

                  <Image src={img2} alt="" width={400} height={400} />
                </CardContent>


              </Box>
            </Box>
          </Box>
          <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >

                <CardContent>

                  <Image src={img3} alt="" width={400} height={400} />
                </CardContent>


              </Box>
            </Box>
          </Box>
          <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >

                <CardContent>

                  <Image src={img4} alt="" width={600} height={400} />
                </CardContent>


              </Box>
            </Box>
          </Box>
          <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >

                <CardContent>

                  <Image src={img5} alt="" width={600} height={400} />
                </CardContent>


              </Box>
            </Box>
          </Box>
          <Box padding={{ xs: 1, md: 2, lg: 3 }}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ backgroundImage: 'none' }}
              >

                <CardContent>

                  <Image src={img6} alt="" width={600} height={400} />
                </CardContent>


              </Box>
            </Box>
          </Box>







        </Slider>
      </Box>
    </Box>
  );
};

export default Articles;
