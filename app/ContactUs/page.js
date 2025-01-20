"use client";
import { Container, Box, Typography, Grid2, IconButton } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
  LocationOn,
  Call,
} from "@mui/icons-material";
// import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Grid2 container spacing={3} rowSpacing={10} marginBottom={10}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "75px",
                height: "75px",
                backgroundColor: "#F5F3DA",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="Beverly.png" alt="icon" />
            </Box>
            <Typography variant="h3" mt={3}>
              Let's Collaborate
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={4}>
              Lorem Ipsum is simply dummy text of the printing.
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <img src="/map.png" alt="map-image" />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: "15px",

              borderRight: { xs: "none", md: "1px solid #D2D2D2" },
            }}
          >
            <Typography variant="h6" mb={3}>
              Follow us
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fffff1",
                  boxShadow: "0px 0px 12px -2px",
                }}
              >
                <IconButton aria-label="Facebook" style={{ color: "#000" }}>
                  <FacebookRounded />
                </IconButton>
              </Box>
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fffff1",
                  boxShadow: "0px 0px 12px -2px",
                }}
              >
                <IconButton aria-label="Instagram" style={{ color: "#000" }}>
                  <Instagram />
                </IconButton>
              </Box>
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fffff1",
                  boxShadow: "0px 0px 12px -2px",
                }}
              >
                <IconButton aria-label="Twitter" style={{ color: "#000" }}>
                  <Twitter />
                </IconButton>
              </Box>
              <Box
                sx={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fffff1",
                  boxShadow: "0px 0px 12px -2px",
                }}
              >
                <IconButton aria-label="LinkedIn" style={{ color: "#000" }}>
                  <LinkedIn />
                </IconButton>
              </Box>
            </Box>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: { xs: "flex-start", md: "center" },
              gap: "5px",

              borderRight: { xs: "none", md: "1px solid #D2D2D2" },
            }}
          >
            <IconButton aria-label="Call" style={{ color: "#000" }}>
              <Call />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              +94 4444 5555 6
            </Typography>
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 4 }}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: { xs: "flex-start", md: "center" },
              gap: "15px",
            }}
          >
            <IconButton aria-label="Location" style={{ color: "#000" }}>
              <LocationOn />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              but also the leap into electronic typesetting
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
      {/* <ContactForm /> */}
    </>
  );
};

export default Contact;
