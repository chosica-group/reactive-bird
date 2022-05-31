import type { FC } from 'react';
import { Container } from '@mui/material';

import { AppBar } from './app-bar';

export const MainLayout: FC = ({ children }) => (
  <>
    <AppBar />
    <Container fixed sx={{ paddingTop: 1 }}>
      {children}
    </Container>
  </>
);
