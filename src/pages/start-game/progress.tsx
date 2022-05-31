import { Box, CircularProgress, styled, Typography } from '@mui/material';
import type { CircularProgressProps } from '@mui/material';

type TProps = CircularProgressProps & { value: number };

const CenterBox = styled(Box)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Progress = (props: TProps) => (
  <CenterBox
    sx={{
      flexDirection: 'column',
    }}
  >
    <CenterBox>
      <CircularProgress variant="determinate" {...props} />
      <CenterBox>
        <Typography variant="caption" component="div" color="text.secondary">
          {`${props.value}%`}
        </Typography>
      </CenterBox>
    </CenterBox>
    <Typography variant="caption" component="div" color="text.secondary" mt={8}>
      Загрузка игры...
    </Typography>
  </CenterBox>
);
