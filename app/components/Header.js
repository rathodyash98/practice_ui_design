import { Container, Box, Grid2, Link, Button } from "@mui/material";

const Header = () => {
  return (
    <Container maxWidth="full">
      <Grid2
        container
        direction={"row"}
        spacing={2}
        sx={{ my: 2 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Grid2 item="true" xs={12} md={4}>
          <Box
            sx={{
              fontWeight: "bold",
              color: "#1090CB",
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            }}
          >
            LOGO
          </Box>
        </Grid2>

        <Grid2
          item="true"
          xs={12}
          sm={6}
          md={8}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: { xs: 1, sm: 3, md: 5 },
            justifyContent: { sm: "flex-end" },
          }}
        >
          <Link
            href="/"
            color="#000"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            color="#000"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            About Us
          </Link>
          <Link
            href="#"
            color="#000"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Services
          </Link>
          <Link
            href="#"
            color="#000"
            sx={{
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Blog
          </Link>

          <Box sx={{ xs: 2, sm: 4, md: 4 }}>
            <Button variant="contained">Contact Us</Button>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Header;
