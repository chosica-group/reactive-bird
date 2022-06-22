// import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useGetAllLeaderboardQuery } from 'services/leaderboard/index';
import type { TAllLeaderboardRequest } from 'services/leaderboard/types';
import { Container, LeaderCard } from './components';

// const mockData = [
//   {
//     rating: 1,
//     time: 35,
//     result: 1,
//     name: 'Ваня',
//     avatar: '',
//   },
//   {
//     rating: 2,
//     time: 65,
//     result: 22,
//     name: 'Маша',
//     avatar: '',
//   },
//   {
//     rating: 3,
//     time: 35,
//     result: 15,
//     name: 'Петя',
//     avatar: '',
//   },
// ];

export const LeaderboardPage = () => {
  const body: TAllLeaderboardRequest = {
    ratingFieldName: 'rrrr',
    cursor: 0,
    limit: 0,
  };
  const { data } = useGetAllLeaderboardQuery(body);
  return (
    <Container>
      <Typography variant="h1">Рекорды</Typography>
      <Stack spacing={2} alignItems="center">
        {data?.map((user, index) => (
          <LeaderCard rating={0} time={0} result={0} name="dddd" avatar="wedwedwe" key={index} />
        ))}
      </Stack>
    </Container>
  );
};
