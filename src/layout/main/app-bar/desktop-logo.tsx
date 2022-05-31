import { FlutterDash as AppIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';

export const DesktopLogo = () => (
  <>
    <AppIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      Flappy Bird
    </Typography>
  </>
);
