"use client";

import { Box, Grid2, Typography } from "@mui/material";
import { Container } from "@mui/material";

const content = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box maxWidth={750} paddingLeft={1}>
          <Typography variant="h4" color="primary" fontWeight="bold">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
          <Typography variant="body1" color="textSecondary" mt={5}>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS. We build and develop mobile
            applications for several top platforms, including Android & IOS.
          </Typography>
        </Box>
        <br />
        <Grid2 container>
          <Grid2
            container
            spacing={2}
            sx={{ my: 3 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid2 item="true" maxWidth={370}>
              <Typography variant="h5" fontWeight="bold">
                Lorem Ipsum is simply dummy text of the printing.
              </Typography>
              <br />
              <Typography>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects.
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 item="true" xs={12} md={3} size={3}>
              <Typography>Web Application</Typography>
            </Grid2>
            <Grid2 item="true" xs={12} md={3} size={3}>
              <Typography>SEO</Typography>
            </Grid2>
            <Grid2 item="true" xs={12} md={3} size={3}>
              <Typography>Mobile Application</Typography>
            </Grid2>
            <Grid2 item="true" xs={12} md={3} size={3}>
              <Typography>AR/VR</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default content;
