import { useState, useEffect } from 'react';
import { Typography, Box, Skeleton, Button } from '@mui/material';
import { Progress, Rules, PaperGame } from './components';

export const StartGamePage = () => {
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
          <PaperGame>
            <Typography variant="h2">Все готово!</Typography>
            <Button size="large" variant="contained">
              Играть
            </Button>
          </PaperGame>
        </Box>
      )}
      <Rules />
    </Box>
  );
};
