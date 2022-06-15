import { Container, Stack, Typography } from '@mui/material';
import { Avatar, Password, Profile } from './components';

export const UserPage = () => (
  <Container maxWidth="xs">
    <Typography variant="h1" align="center">
      Профиль игрока
    </Typography>

    <Stack spacing={2}>
      <Avatar />
      <Profile />
      <Password />
    </Stack>
  </Container>
);
