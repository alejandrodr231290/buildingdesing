import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import logo from '../../../../imagen/logo.png';
import Image from 'next/image';

interface NavItemProps {
  title: string;
  id: string;
  href: string;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleMobileMenuClick: () => void;
  pages: Array<{
    title: string;
    id: string;
    href?: string;
    children?: Array<NavItemProps>;
  }>;
}

const Topbar = ({ handleMobileMenuClick, pages = [] }: Props): JSX.Element => {
  const theme = useTheme();
  // const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="BUILD & DESIGN CONSTRUCTION INC"
        width={{ xs: 100, md: 120 }}
      >
        <Image src={logo} alt="logo" width={200} height={50} />

      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {pages.map((p, i) => (
          <Box key={i} marginLeft={3}>
            {!p.children ? (
              <Link
                href={p.href}
                color={'text.primary'}
                underline={'none'}
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {p.title}
              </Link>
            ) : (
              <NavItem title={p.title} items={p.children} id={p.id} />
            )}
          </Box>
        ))}

      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => handleMobileMenuClick()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
