import type { FC } from 'react';
import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { isLoggedInIfoSelector } from 'store/auth-reducer';
import { AppBar } from './app-bar';

export const MainLayout: FC = ({ children }) => {
  const authState = useSelector(isLoggedInIfoSelector);
  console.log(authState.userId, 'authState');
  return (
    <>
      <AppBar />
      <Container fixed sx={{ pt: 1 }}>
        {children}
      </Container>
    </>
  );
};
