import { Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));
