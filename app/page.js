"use client";
import { Container, Box, Grid2, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Carousel from "./components/Carousel";

const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Carousel />
      <Container maxWidth="lg">
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            my: "20px",
            mx: "40px",
          }}
        >
          {/* Content Section */}
          <Grid2 item="true" size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1.8rem",
                  marginBottom: "40px",
                  boxShadow: 1,
                  backgroundColor: "#08d3bb",
                }}
              >
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  style={{ xs: 3, md: 0, color: "white`" }}
                />
              </Box>
              <Box>
                <Typography variant="h5">
                  Lorem Ipsum is simply dummy text
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Lorem Ipsum is simply dummy text
                </Typography>
              </Box>
            </Box>
            <Typography variant="h4" component="h1" color="#1090CB">
              Lorem Ipsum
              <span style={{ color: "black" }}>
                is simply dummy text of the printing.
              </span>
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={5}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              application builders measuring dozens of completed projects. We
              build and develop mobile applications for several top platforms,
              including Android & iOS.
            </Typography>
          </Grid2>
          {/* Image Section */}
          <Grid2 item="true" size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mb: { xs: 3, md: 0 },
              }}
            >
              <img
                src="https://cdn.psdrepo.com/images/2x/recent-activities-ios-app-freebies-s5.jpg"
                width={500}
                height={500}
                alt="content-img"
                style={{
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default Page;
