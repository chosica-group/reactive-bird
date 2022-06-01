import { useState } from 'react';
import type { MouseEvent } from 'react';

import { Container, Toolbar, AppBar as AppBarMui } from '@mui/material';
import { DesktopLogo } from 'layout/main/app-bar/desktop-logo';
import { MobileLogo } from 'layout/main/app-bar/mobile-logo';
import { User } from 'layout/main/app-bar/user';
import { MobileMenu } from './mobile-menu';
import { DesktopMenu } from './desktop-menu';
import { authService } from '../../../services/auth.service';

const pages = ['Лидеры', 'Форум'];

export const AppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    authService.signup({
      first_name: 'ALex',
      second_name: 'Smolik',
      login: 'leshutic2',
      email: 'test83233@test.com',
      password: 'Alex1234',
      phone: '11111111'
    }).then(res => {
      console.log(res);
    });

    // authService.signin({ login: 'leshutic', password: 'Aleks1234' }).then(res => {
    //   console.log(res);
    // })

    setAnchorElUser(null);
  };

  return (
    <AppBarMui position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopLogo />

          <MobileMenu pages={pages} />

          <MobileLogo />

          <DesktopMenu handleCloseNavMenu={handleCloseUserMenu} pages={pages} />

          <User
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            handleOpenUserMenu={handleOpenUserMenu}
          />
        </Toolbar>
      </Container>
    </AppBarMui>
  );
};
