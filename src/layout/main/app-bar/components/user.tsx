import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import type { MouseEvent } from 'react';

type TProps = {
  handleOpenUserMenu: (event: MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  handleCloseUserMenu: () => void;
};

const settings = ['Профиль', 'Выйти'];

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
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>
);
