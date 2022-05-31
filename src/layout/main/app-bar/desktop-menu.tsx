import { Box, Button } from '@mui/material';

type TProps = {
  handleCloseNavMenu: () => void;
  pages: string[];
};

export const DesktopMenu = ({ handleCloseNavMenu, pages }: TProps) => (
  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <Button
        key={page}
        onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {page}
      </Button>
    ))}
  </Box>
);
