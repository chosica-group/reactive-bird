import type { FC } from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { userInfoSelector } from 'store/auth-reducer';
import { AppBar } from './app-bar';

export const MainLayout: FC = ({ children }) => {
  const authState = useSelector(userInfoSelector);
  const root = document.getElementById('root');
  if (root) {
    root.style.background = authState.themeData?.theme_background_color || 'white';
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
