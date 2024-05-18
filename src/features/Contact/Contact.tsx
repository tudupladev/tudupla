import { ChangeEvent, useState } from "react";
import theme from "muiTheme";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, Paper, TextField, Typography } from "@mui/material";
import { useResolution } from "features/common/hooks/useResolution";
import { Header } from "layouts";
import emailjs from "@emailjs/browser";
import { ContactUsImg, ContainerBox, GridRight } from "./Contact.styles";
import { FormState } from "./types";
import ContactImg from "../../assets/contactUsImg.jpg";

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    secondName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isXs } = useResolution();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("formState", formState);
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || "",
        process.env.REACT_APP_TEMPLATE_ID || "",
        e.target as HTMLFormElement,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setTimeout(() => {}, 5000); // hide message after 5 seconds
        },
        (error) => {
          setIsSubmitting(false);
          setTimeout(() => {}, 5000); // hide message after 5 seconds
        }
      );
  };

  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ContactUsImg src={ContactImg} alt="contact" />
        </Grid>
        <GridRight item xs={12} sm={6}>
          <Typography
            variant={isXs ? "h4" : "h3"}
            fontWeight="bold"
            color={theme.palette.primary.main}
            textAlign="center"
            pb={{ xs: "1rem", md: "0" }}
          >
            Contacto
          </Typography>
          <ContainerBox>
            <Paper style={{ padding: 16 }}>
              <form onSubmit={sendEmail}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      name="firstName"
                      type="text"
                      label="Nombre"
                      value={formState.firstName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      name="secondName"
                      type="text"
                      label="Apellido"
                      value={formState.secondName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      name="email"
                      type="email"
                      label="Email"
                      value={formState.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      name="message"
                      type="text"
                      label="Mensaje"
                      multiline
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item style={{ marginTop: 16 }}>
                    <LoadingButton
                      size="medium"
                      loading={isSubmitting}
                      variant="contained"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      <span>Enviar</span>
                    </LoadingButton>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </ContainerBox>
        </GridRight>
      </Grid>
    </>
  );
};

export { Contact };
