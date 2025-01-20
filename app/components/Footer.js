"use client";
import { Grid2, Typography, IconButton, Container, Box } from "@mui/material";
import {
  FacebookRounded,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid2 container spacing={4} sx={{ mt: "100px" }}>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              component={"h1"}
              color="#00329B"
              fontFamily={"poppins"}
              fontWeight={"bold"}
            >
              LOGO
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={4}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={4}>
              @Lorem
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6">About Us</Typography>
            <Typography variant="body1" color="textSecondary" mt={4}>
              Lorem
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={2}>
              Portfolio
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={2}>
              Careers
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={2}>
              Contact us
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body1" color="textSecondary" mt={4}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={4}>
              +908 89097 890
            </Typography>
          </Grid2>

          <Grid2
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              alignContent: { sm: "center", md: "center" },
              justifyContent: { sm: "flex-start", md: "center" },
              gap: "15px",
              paddingTop: { xs: "120px", md: "140px" },
            }}
          >
            <Box
              sx={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
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
                flexDirection: "column",
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
          </Grid2>
        </Grid2>
      </Container>
      <Grid2
        size={12}
        sx={{
          textAlign: "center",
          borderTop: "1px solid #D2D2D2",
          paddingY: "20px",
          marginTop: "30px",
        }}
      >
        <Typography variant="subtitle1" color="textSecondary">
          &copy; 2021 Lorem all rights reserved
        </Typography>
      </Grid2>
    </>
  );
};

export default Footer;
