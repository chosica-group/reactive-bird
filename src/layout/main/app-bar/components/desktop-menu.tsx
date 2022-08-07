// import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import type { TSiteTheme } from 'server/models/types';
import { useGetAllThemesQuery } from 'services/theme/theme-api';
import { isLoggedInIfoSelector } from 'store/auth-reducer';

type TPages = {
  text: string;
  path: string;
};

type TProps = {
  handleCloseNavMenu: () => void;
  pages: TPages[];
};

export const DesktopMenu = ({ handleCloseNavMenu, pages }: TProps) => {
  console.log('DesktopMenu');
  const authState = useSelector(isLoggedInIfoSelector);
  console.log(authState, 'authState11111111');
  const { data } = useGetAllThemesQuery();
  // const [userTheme, setUserTheme] = useState('light');
  // const userTheme = 'dark';
  // const [currentTheme, setCurrentTheme] = useState<TSiteTheme>({
  //   theme_name: 'dark',
  //   theme_background_color: '#f0f1f5',
  //   theme_text_color: '#ffffff',
  //   theme_id: 1,
  // });
  // useEffect(() => {
  //   console.log(data, 'data');
  //   if (data) {
  //     const themeToUse: TSiteTheme | undefined = data.find(
  //       (theme: TSiteTheme) => theme.theme_name === authState.userTheme,
  //     );
  //     if (themeToUse) {
  //       setCurrentTheme(themeToUse);
  //     }
  //     const body = document.querySelector('body');
  //     if (body) {
  //       body.style.backgroundColor = currentTheme.theme_background_color;
  //     }
  //   }
  // }, [authState.userTheme, data, currentTheme.theme_background_color]);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.text}
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color:
              data?.find((f) => f.theme_name === authState.userTheme)?.theme_text_color || 'white',
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
