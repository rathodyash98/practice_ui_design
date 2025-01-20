import React from "react";
import { Container, Box, Typography } from "@mui/material";

const companyLogo = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">You will be in good Company</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: { xs: 0, md: 10 },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="/companyLogo/beneoshop.png" />
          <img src="/companyLogo/caspio.png" />
          <img src="/companyLogo/HyperGrid.png" />
          <img src="/companyLogo/leotrippi.png" />
        </Box>
      </Box>
    </Container>
  );
};

export default companyLogo;
