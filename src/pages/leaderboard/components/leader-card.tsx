import { Box, Typography } from '@mui/material';
import { CurrencyBitcoin as CoinIcon } from '@mui/icons-material';
import type { TSiteTheme } from 'server/models/types';
import { Avatar, BadgeWrap, Item, ResultText } from './styled';

type TProps = {
  rating: number;
  result: number;
  name: string;
  avatar: string;
  themeData: TSiteTheme;
};

export const LeaderCard = ({ avatar, name, rating, result, themeData }: TProps) => (
  <BadgeWrap
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    color="primary"
    badgeContent={rating}
  >
    <Item>
      <Box
        sx={{
          backgroundColor: themeData.theme_background_color || 'white',
        }}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Avatar alt={name} src={avatar} />
        <Box ml={1}>
          <Typography variant="h6" textAlign="left" color={themeData.theme_text_color}>
            {name}
          </Typography>

          <ResultText sx={{ color: themeData.theme_text_color }} variant="body1" textAlign="left">
            <CoinIcon fontSize="small" /> результат: {result}
          </ResultText>
        </Box>
      </Box>
    </Item>
  </BadgeWrap>
);
