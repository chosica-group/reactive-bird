import { FlutterDash as AppIcon } from '@mui/icons-material';
import { LinkLogo } from './styled';

export const DesktopLogo = () => (
  <>
    <AppIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    <LinkLogo
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: 'none', md: 'flex' },
      }}
      mr={2}
    >
      Reactive Bird
    </LinkLogo>
  </>
);
