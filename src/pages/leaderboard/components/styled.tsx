import { Badge, Paper, styled, Typography, Avatar as AvatarMui, Box } from '@mui/material';

export const Container = styled(Box)(() => ({
  width: '400px',
  margin: '0 auto',
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A100,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
}));

export const ResultText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: theme.spacing(0.5),
  },
}));

export const Avatar = styled(AvatarMui)(() => ({
  width: 56,
  height: 56,
}));

export const BadgeWrap = styled(Badge)(() => ({
  width: '100%',
  '& span.BaseBadge-badge': {
    top: 5,
    left: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    fontSize: '1rem',
  },
}));
