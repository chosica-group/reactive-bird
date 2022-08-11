import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeInfoSelector } from 'store/theme-reduser';

type TPages = {
  text: string;
  path: string;
};

type TProps = {
  handleCloseNavMenu: () => void;
  pages: TPages[];
};

export const DesktopMenu = ({ handleCloseNavMenu, pages }: TProps) => {
  const themeState = useSelector(themeInfoSelector);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.text}
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: themeState.themeData?.theme_header_text_color || 'white',
            display: 'block',
          }}
          component={NavLink}
          to={page.path}
        >
          {page.text}
        </Button>
      ))}
    </Box>
  );
};
