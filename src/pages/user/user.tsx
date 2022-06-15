import { Container, Stack, Typography } from '@mui/material';
import { Avatar, Password, Profile } from './components';

type TUser = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

// @ts-ignore
const mockData: TUser = {
  first_name: 'first_name',
  second_name: 'second_name',
  display_name: 'display_name',
  login: 'login',
  email: 'email',
  phone: 'phone',
  avatar:
    'https://e7.pngegg.com/pngimages/165/45/png-clipart-computer-icons-male-avatar-white-collar-miscellaneous-blue.png',
};

export const UserPage = () => {
  // @ts-ignore
  const { avatar, ...profile } = mockData;

  return (
    <Container maxWidth="xs">
      <Typography variant="h1" align="center">
        Профиль игрока
      </Typography>

      <Stack spacing={2}>
        <Avatar avatar={avatar} />
        <Profile />
        <Password />
      </Stack>
    </Container>
  );
};
