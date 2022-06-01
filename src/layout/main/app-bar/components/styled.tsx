import { styled, Typography } from '@mui/material';

/**
 * добавил as typeof Typography, т.к. были ошибки типизации
 * https://github.com/mui/material-ui/issues/15695
 */
export const LinkLogo = styled(Typography)(() => ({
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
})) as typeof Typography;
