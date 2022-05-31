import type { FC } from 'react';

import { Box, Stack } from '@mui/material';
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
  <Box sx={{ width: '100%' }}>
    <h1>Рекорды</h1>
    <Stack spacing={2} alignItems="center">
      {mockData.map((user, index) => (
        <LeaderCard key={index} {...user} />
      ))}
    </Stack>
  </Box>
);
