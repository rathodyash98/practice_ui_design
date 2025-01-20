import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";

const Subscribe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
        backgroundColor: "#E8F4FA",
        position: "relative",
        padding: 2,
        marginTop: 8,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: 28,
          width: 28,
          top: -12,
          left: { xs: 15, sm: 150, md: 200 },
        }}
      >
        <img src="/star.png" alt="star-icon" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          height: 28,
          width: 28,
          right: { xs: 20, sm: 150, md: 500 },
          top: 90,
        }}
      >
        <img src="/icon.png" alt="star-icon" />
      </Box>

      <Typography
        variant="h5"
        textAlign={"center"}
        width={{ sm: "50%", md: "24%" }}
      >
        Lorem Ipsum is simply dummy text of the printing.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 1,
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          size="small"
          fullWidth
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
          }}
        />
        <Button
          variant="contained"
          sx={{
            color: "#fff",
            px: "25px",
            backgroundColor: "#000",
            ":hover": { backgroundColor: "#fff", color: "#000" },
          }}
        >
          SUBSCRIBE
        </Button>
      </Box>
    </Box>
  );
};

export default Subscribe;
