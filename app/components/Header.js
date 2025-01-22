"use client";
import { Container, Box, Grid, Link, Button, Grid2 } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="xl">
      <Grid2
        container
        spacing={2}
        // style={{ my: 2 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 item="true" xs={12} md={4}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "#1090CB",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            LOGO
          </Box>
        </Grid2>

        <Grid2
          item="true"
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 1, sm: 3, md: 5 },
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Link
            href="/"
            color="#000"
            sx={{
              my: { xs: 1, sm: 0 },
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Home
          </Link>
          <Link
            href="./About"
            color="#000"
            sx={{
              my: { xs: 1, sm: 0 },
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            About Us
          </Link>
          <Link
            href="../Services"
            color="#000"
            sx={{
              my: { xs: 1, sm: 0 },
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Services
          </Link>
          <Link
            href="../Blog"
            color="#000"
            sx={{
              my: { xs: 1, sm: 0 },
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Blog
          </Link>
          <Button
            href="../ContactUs"
            variant="contained"
            sx={{
              my: { xs: 1, sm: 0 },
            }}
          >
            Contact Us
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Header;
