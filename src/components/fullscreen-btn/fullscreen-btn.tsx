import { useState } from 'react';
import { IconButton } from '@mui/material';
import {
  FullscreenExit as FullscreenExitIcon,
  Fullscreen as FullscreenIcon,
} from '@mui/icons-material';

type TProps = {
  element: HTMLElement;
};

export const FullscreenBtn = ({ element }: TProps) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [error, setError] = useState(false);

  const openFullscreen = () => {
    element
      .requestFullscreen()
      .then(() => {
        setFullscreen(true);
      })
      .catch(() => {
        setError(true);
      });
  };

  const closeFullscreen = () => {
    document
      .exitFullscreen()
      .then(() => {
        setFullscreen(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <IconButton onClick={fullscreen ? closeFullscreen : openFullscreen} disabled={error}>
      {fullscreen ? (
        <FullscreenExitIcon sx={{ color: 'white' }} />
      ) : (
        <FullscreenIcon sx={{ color: 'white' }} />
      )}
    </IconButton>
  );
};
