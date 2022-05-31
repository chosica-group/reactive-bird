import type { FC } from 'react';
import { Container } from '@mui/material';

import { AppBar } from './app-bar';

export const MainLayout: FC = ({ children }) => (
  <div>
    <AppBar />
    <Container fixed>{children}</Container>
  </div>
);
