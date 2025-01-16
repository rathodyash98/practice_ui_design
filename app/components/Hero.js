import { Grid2, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";

const Hero = () => {
  return (
    <Container maxWidth="md">
      <Grid2
        container
        spacing={2}
        sx={{ my: 3 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2
          item="true"
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            sx={{
              width: 180,
              borderRadius: "16px",
            }}
            src="https://dxpfrontendprod.z6.web.core.windows.net/7c1b3930-8e2e-439e-9761-e05ec5432c15/eciu_image_280x280.png"
          />
        </Grid2>
        <Grid2
          item="true"
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            sx={{
              width: 250,
              borderRadius: "16px",
            }}
            src="https://www.rkgcustomssolutions.com/wp-content/uploads/elementor/thumbs/team-ohww245fcn28cjrzpp5gqd9m4c91f8b7ljlfv0ozn4.jpeg"
          />
        </Grid2>

        <Grid2 item="true" xs={12} md={6}>
          <Box sx={{ width: 390, paddingLeft: 3 }}>
            <Typography variant="h5" gutterBottom color="#1090CB">
              About Us
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={5}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={2}
        sx={{ my: 3 }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid2
          item="true"
          xs={12}
          md={2}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            sx={{
              width: 400,
              borderRadius: "16px",
            }}
            src="https://static.wixstatic.com/media/nsplsh_82caa8ab7e1648039e9c58944a5c9e71~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/nsplsh_82caa8ab7e1648039e9c58944a5c9e71~mv2.jpg"
          />
        </Grid2>
        <Grid2
          item="true"
          xs={12}
          md={2}
          display="flex"
          justifyContent="center"
        >
          <Box
            component="img"
            sx={{
              width: 400,
              borderRadius: "16px",
            }}
            src="https://miro.medium.com/v2/resize:fit:1400/0*0DWIxpNViJgCoRyA"
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Hero;
