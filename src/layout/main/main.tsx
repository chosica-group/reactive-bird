import type { FC } from 'react';
import { Container } from '@mui/material';
import { WelcomePage } from '../../pages/welcome-page/index';

import { AppBar } from './app-bar';

export const MainLayout: FC = ({ children }) => (
  <>
    <AppBar />
    <Container fixed sx={{ pt: 1 }}>
      {/* {children} */}
      <WelcomePage />
    </Container>
  </>
);
