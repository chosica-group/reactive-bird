import { Alert, Stack } from '@mui/material';

export const Rules = () => (
  <Stack spacing={2} mt={4} width="100%">
    <Alert severity="info" onClose={() => {}}>
      Тут будут правила игры
    </Alert>
  </Stack>
);
