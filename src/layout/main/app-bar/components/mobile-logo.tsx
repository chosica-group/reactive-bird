import { FlutterDash as AppIcon } from '@mui/icons-material';
import { LinkLogo } from 'layout/main/app-bar/components/styled';

export const MobileLogo = () => (
  <>
    <AppIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    <LinkLogo
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: 'none', md: 'flex' },
      }}
      mr={2}
    >
      Flappy Bird
    </LinkLogo>
  </>
);
