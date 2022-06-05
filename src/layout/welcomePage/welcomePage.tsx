import type { FC } from 'react';
import { Container } from '@mui/material';

export const WelcomeLayout: FC = ({ children }) => (
  <Container fixed sx={{ pt: 1 }}>
    {children}
  </Container>
);
