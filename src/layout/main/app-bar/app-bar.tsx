import { useState } from 'react';
import type { MouseEvent } from 'react';
import { AppBar as AppBarMui, Container, Stack, Toolbar } from '@mui/material';
import { FullscreenBtn } from 'components/fullscreen-btn';
import { logout } from 'services/auth/auth-api';
import { DesktopLogo, DesktopMenu, MobileLogo, MobileMenu, User } from './components';

const pages = [
  { text: 'Игра', path: '/game' },
  { text: 'Лидеры', path: '/leaderboard' },
  { text: 'Форум', path: '/forum' },
];

export const AppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutUser = async () => {
    try {
      const logoutUser = await logout();
      if (logoutUser) {
        document.location.reload();
      }
    } catch (e) {
      console.log(e, 'error logout');
    };
  };

  return (
    <AppBarMui position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DesktopLogo />

          <MobileMenu pages={pages} />

          <MobileLogo />

          <DesktopMenu handleCloseNavMenu={handleCloseUserMenu} pages={pages} />

          <Stack direction="row" spacing={1}>
            <FullscreenBtn element={document.documentElement} />
            <User
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              handleLogoutUser={handleLogoutUser}
            />
          </Stack>
        </Toolbar>
      </Container>
    </AppBarMui>
  );
};
