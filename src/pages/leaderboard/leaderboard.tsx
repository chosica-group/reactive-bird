import type { FC } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { LeaderCard } from './leader-card';

const mockData = [
  {
    rating: 1,
    time: 35,
    result: 1,
    name: 'Ваня',
    avatar: '',
  },
  {
    rating: 2,
    time: 65,
    result: 22,
    name: 'Маша',
    avatar: '',
  },
  {
    rating: 3,
    time: 35,
    result: 15,
    name: 'Петя',
    avatar: '',
  },
];

export const LeaderboardPage: FC = () => (
  <Box sx={{ width: '400px' }} ml="auto" mr="auto">
    <Typography variant="h1">Рекорды</Typography>
    <Stack spacing={2} alignItems="center">
      {mockData.map((user, index) => (
        <LeaderCard key={index} {...user} />
      ))}
    </Stack>
  </Box>
);