import { Box, Grid, styled } from '@mui/material';

export const TeamImg = styled('img')({
  height: '100vh',
  width: '100%',
});

export const TeamGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',
});

export const ContainerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
