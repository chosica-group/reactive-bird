import type { MouseEvent } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

type TProps = {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
};

const settings = [
  { text: 'Профиль', path: 'profile' },
  { text: 'Выйти', path: 'click' },
];

// TODO Добавить аватар пользователя
export const User = ({ handleOpenUserMenu, anchorElUser, handleCloseUserMenu }: TProps) => (
  <Box sx={{ flexGrow: 0 }}>
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
      <Avatar alt="avatar" src="" />
    </IconButton>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) =>
        setting.path !== 'click' ? (
          <MenuItem key={setting.text}>
            <Typography
              textAlign="center"
              component={NavLink}
              to={setting.path}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              {setting.text}
            </Typography>
          </MenuItem>
        ) : (
          <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting.text}</Typography>
          </MenuItem>
        ),
      )}
    </Menu>
  </Box>
);
