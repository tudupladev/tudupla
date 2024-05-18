import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import { AppBarStyled, LogoBox, ToolbarStyled } from "./Header.styles";
import { MenuComponent } from "./MenuComponent";
import { pages } from "./constants";
import theme from "../../muiTheme";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const routeChange = (path: string) => {
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <>
      <AppBarStyled position="static" color="default">
        <Container maxWidth="xl">
          <ToolbarStyled>
            <LogoBox alt="Tu dupla" src={Logo} />
            <MenuComponent
              handleCloseNavMenu={handleCloseNavMenu}
              routeChange={routeChange}
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              pages={pages}
            />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => routeChange(page.url)}
                  sx={{ my: 2, color: theme.palette.secondary.main }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </ToolbarStyled>
        </Container>
      </AppBarStyled>
    </>
  );
};

export default Header;
