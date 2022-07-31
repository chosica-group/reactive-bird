import { useState } from 'react';
import type { MouseEvent } from 'react';
import { AppBar as AppBarMui, Container, Stack, Toolbar } from '@mui/material';
import { FullscreenBtn } from 'components/fullscreen-btn';
import { SiteThemeBtn } from 'components/site-theme';
// import { addUser, getUserTheme, updateUserTheme } from 'server/controllers/user-theme';
import { handleChangeMode1 } from './sss';
import { logout } from 'services/auth/auth-api';
import { DesktopLogo, DesktopMenu, MobileLogo, MobileMenu, User } from './components';

const pages = [
  { text: 'Игра', path: '/game' },
  { text: 'Лидеры', path: '/leaderboard' },
  { text: 'Форум', path: '/forum' },
];
// const handleChangeMode1 = async (userId: number, themeName: string) => {
//   const userTheme = await getUserTheme(userId);
//   if (!userTheme) {
//     await addUser({ user_id: userId, theme_name: themeName });
//   } else {
//     await updateUserTheme({ user_id: userId, theme_name: themeName });
//   }
//   console.log('handleChangeMode');
// };

export const AppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [themeName, setThemeName] = useState<string>('light');
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
    }
  };
  const handleChangeMode = async () => {
    const userId = 123;
    setThemeName((prevState) => (prevState === 'light' ? 'dark' : 'light'));
    await handleChangeMode1(userId, themeName);
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
            <SiteThemeBtn handleChangeMode={handleChangeMode} themeName={themeName} />
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
