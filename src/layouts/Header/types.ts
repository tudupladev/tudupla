export type MenuProps = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  pages: { name: string; url: string }[];
  routeChange: (url: string) => void;
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: null | HTMLElement;
};
