/* eslint-disable import/no-extraneous-dependencies */
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { AddressBox, FooterStyled } from "./Footer.styles";
import theme from "../../muiTheme";
import MediaIcon from "../../features/common/components/MediaIcon/MediaIcon";

export const Footer = () => {
  return (
    <>
      <FooterStyled>
        <Grid container>
          <Grid item container xs={12} md={6}>
            <AddressBox>
              <Typography variant="h6" color={theme.palette.primary.main}>
                CORDON
              </Typography>
              <Stack direction="row" alignItems="center" gap={1}>
                <HomeIcon color="primary" />
                <Typography variant="body2">Colonia 1524 apto 101</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <LocalPhoneIcon color="primary" />
                <Typography variant="body2">097343050</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={1}>
                <MailOutlineIcon color="primary" />
                <Typography variant="body2">
                  tuduplainmobiliaria@gmail.com
                </Typography>
              </Stack>
            </AddressBox>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            display="flex"
            justifyContent={{ xs: "start", md: "end" }}
            pt={{ xs: "2rem" }}
          >
            <Box>
              <Typography variant="body2">Seguinos en: </Typography>
              <MediaIcon url="https://instagram.com/tuduplainmobiliaria?igshid=YmMyMTA2M2Y=">
                <InstagramIcon />
              </MediaIcon>
              <MediaIcon url="https://www.facebook.com/Tuduplainmobiliaria">
                <FacebookIcon />
              </MediaIcon>
              <MediaIcon url="https://www.linkedin.com/company/tu-dupla-inmobiliaria/about/">
                <LinkedInIcon />
              </MediaIcon>
              <MediaIcon url="https://www.youtube.com/@tuduplainmobiliaria5515">
                <YouTubeIcon />
              </MediaIcon>
            </Box>
          </Grid>
        </Grid>
      </FooterStyled>
    </>
  );
};

export default Footer;
