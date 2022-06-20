import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

type TPages = {
  text: string;
  path: string;
};

type TProps = {
  handleCloseNavMenu: () => void;
  pages: TPages[];
};

export const DesktopMenu = ({ handleCloseNavMenu, pages }: TProps) => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <Button
        key={page.text}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
        component={NavLink}
        to={page.path}
      >
        {page.text}
      </Button>
    ))}
  </Box>
);
