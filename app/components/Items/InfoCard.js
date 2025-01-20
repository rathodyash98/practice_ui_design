import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const InfoCard = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          width: "100%",
          marginY: "100px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            backgroundColor: "#F4F4F4",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            paddingY: "50px",
            px: "30px",
          }}
        >
          <Typography variant="h5" gutterBottom width={{ md: "50%" }}>
            Lorem Ipsum is simply dummy text.
          </Typography>
          <Typography variant="body" color="textSecondary" gutterBottom px={5}>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            application builders measuring dozens of completed projects. We
            build and develop mobile applications for several top platforms,
            including Android & iOS.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#1090CB",
              color: "#fff",
              marginTop: "20px",
            }}
          >
            View More
          </Button>
        </Box>

        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            backgroundColor: "#1090CB",
            color: "#fff",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
            paddingY: "50px",
            px: "30px",
            position: "relative",
          }}
        >
          {" "}
          <img
            src="/Bell Angle 1.png"
            alt="bell-img"
            style={{
              width: "120px",
              height: "120px",
              position: "absolute",
              top: -60,
              right: 10,
            }}
          />
          <Typography variant="h5" gutterBottom width={{ md: "50%" }}>
            Lorem Ipsum is simply dummy text.
          </Typography>
          <Typography variant="body" color="#fff" gutterBottom px={5}>
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            application builders measuring dozens of completed projects. We
            build and develop mobile applications for several top platforms,
            including Android & iOS.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#fff",
              color: "#1090CB",
              marginTop: "20px",
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default InfoCard;
