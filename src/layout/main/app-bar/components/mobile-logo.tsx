import { FlutterDash as AppIcon } from '@mui/icons-material';
import { LinkLogo } from './styled';

export const MobileLogo = () => (
  <>
    <AppIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    <LinkLogo
      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: 'flex', md: 'none' },
      }}
      mr={2}
    >
      Reactive Bird
    </LinkLogo>
  </>
);
