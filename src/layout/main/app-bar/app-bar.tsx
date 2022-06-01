import { useState } from 'react';
import type { MouseEvent } from 'react';

import { Container, Toolbar, AppBar as AppBarMui } from '@mui/material';
import { DesktopLogo } from 'layout/main/app-bar/desktop-logo';
import { MobileLogo } from 'layout/main/app-bar/mobile-logo';
import { User } from 'layout/main/app-bar/user';
import { MobileMenu } from './mobile-menu';
import { DesktopMenu } from './desktop-menu';

const pages = ['Лидеры', 'Форум'];

export const AppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
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
