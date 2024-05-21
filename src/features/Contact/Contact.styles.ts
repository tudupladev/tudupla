import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export const ContactImg = styled("img")({
  height: "100vh",
  width: "100%",
});

export const ContainerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const BoxWrapper = styled(Box)({
  height: "100vh",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ContactUsImg = styled("img")({
  height: "90vh",
  width: "100%",
  objectFit: "cover",
});

export const GridRight = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "4px",
  backgroundColor: "#f5f5f5",
});
