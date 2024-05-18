import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import theme from 'muiTheme';
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuIcon from '@mui/icons-material/Menu';
import { MenuProps } from './types';

export const MenuComponent = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  routeChange,
  pages,
  anchorElNav,
}: MenuProps) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'end',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon color="secondary" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.name} onClick={() => routeChange(page.url)}>
              <Typography textAlign="center" color={theme.palette.primary.main}>
                {page.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};
