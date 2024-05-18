import { Grid } from '@mui/material';
import ServiceCard from 'features/common/components/ServiceCard/ServiceCard';
import { ImgGrid, ServicesGrid, TeamWorkImg } from 'features/Home/Home.styles';
import Messure from '../../../../assets/messure2.svg';
import TeamWork from '../../../../assets/teamwork.jpg';
import Sale from '../../../../assets/sale2.svg';
import Buy from '../../../../assets/buy2.svg';
import Rent from '../../../../assets/rent2.svg';

export const Services = () => {
  return (
    <ServicesGrid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={0}
    >
      <ImgGrid
        item
        container
        sx={{ display: { xs: 'none', md: 'flex' } }}
        md={4}
      >
        <TeamWorkImg src={TeamWork} alt="Team Work" />
      </ImgGrid>

      <Grid
        item
        container
        xs={12}
        md={8}
        direction="column"
        pl={{ xs: 0, md: 20 }}
      >
        <Grid item xs={3} pb={2} display="flex" justifyContent="center">
          <ServiceCard title="Compra" image={Buy} />
        </Grid>
        <Grid item xs={3} pb={2} display="flex" justifyContent="center">
          <ServiceCard title="Venta" image={Sale} />
        </Grid>
        <Grid item xs={3} pb={2} display="flex" justifyContent="center">
          <ServiceCard title="Alquiler" image={Rent} />
        </Grid>
        <Grid item xs={3} pb={2} display="flex" justifyContent="center">
          <ServiceCard title="Estudio valor del mercado" image={Messure} />
        </Grid>
      </Grid>
    </ServicesGrid>
  );
};

export default Services;
