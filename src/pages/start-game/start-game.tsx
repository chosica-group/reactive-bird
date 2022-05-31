import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Typography, Box, Skeleton, Paper, Button } from '@mui/material';
import { Progress } from 'pages/start-game/progress';
import { Rules } from 'pages/start-game/rules';

export const StartGamePage: FC = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);

  return (
    <Box>
      <Typography variant="h1">Начало игры</Typography>

      {progress < 100 ? (
        <Box position="relative">
          <Skeleton width="100%" height="400px" variant="rectangular" />
          <Progress value={progress} />
        </Box>
      ) : (
        <Box>
          <Paper
            sx={{
              width: '100%',
              height: '400px',
              backgroundColor: '#e0e0e0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="h2">Все готово!</Typography>
            <Button size="large" variant="contained">
              Играть
            </Button>
          </Paper>
        </Box>
      )}
      <Rules />
    </Box>
  );
};
