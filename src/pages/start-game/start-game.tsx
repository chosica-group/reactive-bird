import { useEffect, useState } from 'react';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import { Game } from 'pages/game';
import { useSelector } from 'react-redux';
import { userInfoSelector } from 'store/auth-reducer';
import { PaperGame, Progress, Rules } from './components';

export const StartGamePage = () => {
  const [progress, setProgress] = useState(10);
  const [isGameStarted, setGameStart] = useState(false);
  const userData = useSelector(userInfoSelector);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [progress]);

  const startGame = () => setGameStart(true);

  return (
    <Box>
      {progress < 100 && !isGameStarted && (
        <Box position="relative">
          <Skeleton width="100%" height="400px" variant="rectangular" />
          <Progress value={progress} />
        </Box>
      )}

      {progress === 100 && !isGameStarted && (
        <Box>
          <PaperGame
            sx={{
              backgroundColor: userData.themeData?.theme_background_color || '#e0e0e0',
            }}
          >
            <Typography variant="h2" color={userData.themeData?.theme_text_color || 'black'}>
              Все готово!
            </Typography>
            <Button size="large" variant="contained" onClick={startGame}>
              Играть
            </Button>
          </PaperGame>
        </Box>
      )}

      {progress === 100 && isGameStarted && <Game />}
      <Rules />
    </Box>
  );
};
