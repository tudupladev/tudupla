import { AppBar, styled, Toolbar } from '@mui/material';
import theme from 'muiTheme';

export const AppBarStyled = styled(AppBar)({
  color: 'black',
  backgroundColor: `${theme.palette.primary.main}`,
  position: 'relative',
  boxShadow: 'none',
  borderBottom: '0.5px solid white',
});

export const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const LogoBox = styled('img')({
  maxWidth: 150,
  margin: '1rem',
});
