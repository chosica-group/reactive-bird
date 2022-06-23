// import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { useGetAllLeaderboardQuery } from 'services/leaderboard/index';
import type { TAllLeaderboardRequest } from 'services/leaderboard/types';
import { Container, LeaderCard } from './components';

type TDataLeaderboard = {
  data?: Record<string, any>;
};

export const LeaderboardPage = () => {
  const body: TAllLeaderboardRequest = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 10,
  };
  const { data, error, isLoading } = useGetAllLeaderboardQuery(body);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops, an error occured</div>;
  }
  return (
    <Container>
      <Typography variant="h1">Рекорды</Typography>
      <Stack spacing={2} alignItems="center">
        {data?.map((item: TDataLeaderboard, index) => (
          <LeaderCard
            rating={0}
            time={0}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            result={item.data?.score}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            name={item.data?.userName}
            avatar="wedwedwe"
            key={index}
          />
        ))}
      </Stack>
    </Container>
  );
};
