import { Box, Card, CardContent, CardMedia, styled } from '@mui/material';

export const CardContainer = styled(Card)({
  display: 'flex',
  // background:
  //   'linear-gradient(0deg, rgba(252,252,252,0.8730085784313726) 0%, rgba(33,59,164,1) 92%)',
  background: '#213ba4',
  width: '20rem',
  borderRadius: '0',
});

export const CardMediaStyled = styled(CardMedia)({
  height: 100,
  width: 151,
  backgroundSize: 'contain',
  marginTop: '2rem',
});

export const BoxContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: 'white',
});

export const CardContentStyled = styled(CardContent)({
  textAlign: 'center',
});
