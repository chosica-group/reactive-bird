import { styled, Paper, Box, Avatar, Badge, Typography } from '@mui/material';
import { AccessTime as TimeIcon, CurrencyBitcoin as CoinIcon } from '@mui/icons-material';

import { getSecondTime } from 'utils/get-second-time';
import { numWord } from 'utils/num-word';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A100,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '100%',
}));

type TProps = {
  rating: number;
  time: number;
  result: number;
  name: string;
  avatar: string;
};

const ResultText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: theme.spacing(0.5),
  },
}));

const BadgeWrap = styled(Badge)(() => ({
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

export const LeaderCard = ({ avatar, name, rating, time, result }: TProps) => (
  <BadgeWrap
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    color="primary"
    badgeContent={rating}
  >
    <Item>
      <Box display="flex" flexDirection="row">
        <Avatar alt={name} src={avatar} sx={{ width: 56, height: 56 }} />
        <Box ml={1}>
          <Typography variant="h6" textAlign="left" color="black">
            {name}
          </Typography>

          <ResultText variant="body1" textAlign="left">
            <TimeIcon fontSize="small" /> время: {getSecondTime(time)}
          </ResultText>

          <ResultText variant="body1" textAlign="left">
            <CoinIcon fontSize="small" /> результат: {result}{' '}
            {numWord(result, ['монета', 'монеты', 'монет'])}
          </ResultText>
        </Box>
      </Box>
    </Item>
  </BadgeWrap>
);
