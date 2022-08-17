import { IconButton } from '@mui/material';
import { LightMode, ModeNight } from '@mui/icons-material';

type TSiteThemeBtn = {
  themeName: string;
  handleChangeMode: () => void;
};

export const SiteThemeBtn = (props: TSiteThemeBtn) => {
  const { themeName, handleChangeMode } = props;
  return (
    <IconButton onClick={handleChangeMode}>
      {themeName === 'dark' ? (
        <ModeNight sx={{ color: 'white' }} />
      ) : (
        <LightMode sx={{ color: 'white' }} />
      )}
    </IconButton>
  );
};
