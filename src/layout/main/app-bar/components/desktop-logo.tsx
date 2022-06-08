import { FlutterDash as AppIcon } from '@mui/icons-material';
import { LinkLogo } from 'layout/main/app-bar/components/styled';

export const DesktopLogo = () => (
  <>
    <AppIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <LinkLogo // тут какието ошибки - поэтому убрала
    // variant="h6"
    // noWrap
    // component="a"
    // href="/"
    // sx={{
    //   display: { xs: 'none', md: 'flex' },
    // }}
    // mr={2}
    >
      Flappy Bird
    </LinkLogo>
  </>
);
