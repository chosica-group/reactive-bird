import { CircularProgress, Typography } from '@mui/material';
import type { CircularProgressProps } from '@mui/material';
import { CenterBox } from './styled';

type TProps = CircularProgressProps & { value: number };

export const Progress = ({ value, ...props }: TProps) => (
  <CenterBox sx={{ flexDirection: 'column' }}>
    <CenterBox>
      <CircularProgress variant="determinate" {...props} value={value} />
      <CenterBox>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${value}%`}
        </Typography>
      </CenterBox>
    </CenterBox>

    <Typography variant="caption" component="div" color="text.secondary" mt={8}>
      Загрузка игры...
    </Typography>
  </CenterBox>
);
