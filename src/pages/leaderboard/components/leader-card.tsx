import { Box, Typography } from '@mui/material';
import { CurrencyBitcoin as CoinIcon } from '@mui/icons-material';
// import { CurrencyBitcoin as CoinIcon, AccessTime as TimeIcon } from '@mui/icons-material';
// import { getSecondTime } from 'utils/get-second-time';
// import { numWord } from 'utils/num-word';
import { Avatar, BadgeWrap, Item, ResultText } from './styled';

type TProps = {
  rating: number;
  time: number;
  result: number;
  name: string;
  avatar: string;
};

// const COIN_LANG = ['монета', 'монеты', 'монет'] as [string, string, string]; //

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
      <Box display="flex" flexDirection="row" alignItems="center">
        <Avatar alt={name} src={avatar} />
        <Box ml={1}>
          <Typography variant="h6" textAlign="left" color="black">
            {name}
          </Typography>

          {/* <ResultText variant="body1" textAlign="left">
            <TimeIcon fontSize="small" /> время: {getSecondTime(time)}
          </ResultText> */}

          <ResultText variant="body1" textAlign="left">
            <CoinIcon fontSize="small" /> результат: {result}
          </ResultText>
        </Box>
      </Box>
    </Item>
  </BadgeWrap>
);
