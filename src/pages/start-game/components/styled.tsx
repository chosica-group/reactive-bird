import { styled, Paper, Box } from '@mui/material';

export const PaperGame = styled(Paper)(() => ({
  width: '100%',
  height: '400px',
  backgroundColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const CenterBox = styled(Box)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
