import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

type TProps = {
  handleCloseNavMenu: () => void;
  pages: string[];
};
const makePath = (pageName: string): string => {
  const pageText = pageName.toLowerCase();
  switch (pageText) {
    case 'форум':
      return 'forum';
    case 'лидеры':
      return 'leaderboard';
    default:
      return '/';
  }
};

export const DesktopMenu = ({ handleCloseNavMenu, pages }: TProps) => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <NavLink to={makePath(page)} key={page}>
        <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      </NavLink>
    ))}
  </Box>
);
