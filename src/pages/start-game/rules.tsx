import { Alert, Stack } from '@mui/material';

export const Rules = () => (
  <Stack sx={{ width: '100%' }} spacing={2} mt={4}>
    <Alert severity="info" onClose={() => {}}>
      Тут будут правила игры
    </Alert>
  </Stack>
);
