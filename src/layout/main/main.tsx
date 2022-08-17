import type { FC } from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { themeInfoSelector } from 'store/theme-reduser';
import { AppBar } from './app-bar';

export const MainLayout: FC = ({ children }) => {
  const themeState = useSelector(themeInfoSelector);
  const root = document.getElementById('root');
  if (root) {
    root.style.background = themeState.themeData?.theme_background_color || 'white';
    root.style.height = '100vh';
  }
  return (
    <>
      <AppBar />
      <Container fixed sx={{ pt: 1 }}>
        {children}
      </Container>
    </>
  );
};
