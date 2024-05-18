/* eslint-disable import/no-extraneous-dependencies */
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MediaIcon from 'features/common/components/MediaIcon/MediaIcon';
import { BoxContainer, BoxWrapper } from 'features/Home/Home.styles';
import { Header } from 'layouts';
import theme from 'muiTheme';
import { useResolution } from 'features/common/hooks/useResolution';

export const Welcome = () => {
  const { isXs } = useResolution();
  return (
    <>
      <BoxWrapper>
        <Header />
        <BoxContainer>
          <Typography
            variant={isXs ? 'h4' : 'h3'}
            fontWeight="bold"
            color={theme.palette.secondary.main}
            textAlign="center"
            pb={{ xs: '1rem', md: '0' }}
          >
            Te ayudamos a hacer realidad tus proyectos
          </Typography>
          <Box>
            <MediaIcon
              size="large"
              url="https://instagram.com/tuduplainmobiliaria?igshid=YmMyMTA2M2Y="
            >
              <InstagramIcon fontSize="large" color="secondary" />
            </MediaIcon>
            <MediaIcon url="https://www.facebook.com/Tuduplainmobiliaria">
              <FacebookIcon fontSize="large" color="secondary" />
            </MediaIcon>
            <MediaIcon url="https://www.linkedin.com/company/tu-dupla-inmobiliaria/about/">
              <LinkedInIcon fontSize="large" color="secondary" />
            </MediaIcon>
            <MediaIcon url="https://www.youtube.com/@tuduplainmobiliaria5515">
              <YouTubeIcon fontSize="large" color="secondary" />
            </MediaIcon>
          </Box>
        </BoxContainer>
      </BoxWrapper>
    </>
  );
};

export default Welcome;
