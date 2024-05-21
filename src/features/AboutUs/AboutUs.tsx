import { Typography, Box, Grid } from "@mui/material";

import Work from "../../assets/work.png";
import { TeamImg, TeamGrid, ContainerBox } from "./AboutUs.styles";
import { teamMembers } from "./constant";
import { Header } from "../../layouts";
import theme from "../../muiTheme";
import TeamCard from "../common/components/TeamCard/TeamCard";
import { useResolution } from "features/common/hooks/useResolution";

const AboutUs = () => {
  const { isXs } = useResolution();
  return (
    <Box>
      <Header />
      <ContainerBox>
        {!isXs && <TeamImg src={Work} alt="tudupla" />}
        <TeamGrid container md={12} xs={12} width={isXs ? "80%" : "40%"}>
          <Typography
            variant="h3"
            color={theme.palette.primary.main}
            fontWeight="bold"
            my={5}
          >
            Misión
          </Typography>
          <Typography variant="body1" mb={5}>
            Brindar un servicio de asesoria inmobiliaria personalizada orientada
            a cumplir con las exigencias de nuestros clientes. Trabajamos con
            honestidad, ética profesional y discreción en todas las etapas.Nos
            basamos en nuestra experiencia y capacitacion en el sector.
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.primary.main}
            fontWeight="bold"
            my={5}
          >
            Visión
          </Typography>
          <Typography variant="body1" mb={5}>
            Ser la mejor alternativa para quienes quieren la ayuda de un
            profesional inmobiliario, desde una relacion cercana y resolutiva,
            ofreciendo las propuestas más inovadoras.
          </Typography>
          <Typography
            variant="h3"
            color={theme.palette.primary.main}
            fontWeight="bold"
            my={5}
          >
            Nosotros
          </Typography>
          <Typography variant="body1" mb={5}>
            Te asesorarémos en todo el proceso de búsqueda o venta de
            propiedades. Contáctenos vía telefónica o por correo electrónico y
            estaremos encantados de atenderlo. Si lo prefiere, lo esperamos en
            nuestra oficina. ¡Los esperamos!
          </Typography>
          <Grid container item>
            {teamMembers.map((member) => {
              return (
                <Grid
                  key={member.name}
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  p={2}
                >
                  <TeamCard key={member.name} member={member} />
                </Grid>
              );
            })}
          </Grid>
        </TeamGrid>
      </ContainerBox>
    </Box>
  );
};

export { AboutUs };
