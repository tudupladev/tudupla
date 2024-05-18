import { Box, Grid, styled } from '@mui/material';
import theme from 'muiTheme';
import HomeImg from '../../assets/home.jpg';

const HomeWrapper = styled('div')({
  marginTop: '20px',
  color: theme.palette.info.dark,
});

export const BoxWrapper = styled(Box)({
  height: '100vh',
  backgroundImage: `url(${HomeImg})`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const BoxContainer = styled(Box)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImgGrid = styled(Grid)({
  backgroundColor: `${theme.palette.primary.main}`,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const TeamWorkImg = styled('img')({
  height: '90%',
  transform: 'translateX(75%)',
});

export const ServicesGrid = styled(Grid)({
  backgroundColor: `${theme.palette.grey[100]}`,
  height: '80vh',
});

export default HomeWrapper;
