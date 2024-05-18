import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#213ba4',
    },
    secondary: {
      main: '#ffff',
    },
  },
});

export default theme;
