"use client";
import { useState } from "react";
import {
  Container,
  Alert,
  Box,
  Typography,
  FormControlLabel,
  FormControl,
  TextField,
  Button,
  Grid2,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E8F4FA",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "20px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginY: "30px",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Say hello
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          gutterBottom
        >
          Lorem Ipsum is simply dummy text of the printing.
        </Typography>

        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "40px" }}
        >
          <Grid2 spacing={2}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: "20px",
              }}
            >
              <Box width={{ xs: "100%", md: "50%" }}>
                <Typography color="#4F4F4F">First Name</Typography>
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    marginY: "5px",
                  }}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Box>

              <Box width={{ xs: "100%", md: "50%" }}>
                <Typography color="#4F4F4F">Last Name</Typography>
                <TextField
                  sx={{
                    backgroundColor: "#fff",
                    marginY: "5px",
                  }}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Box>
            </Box>
            <Grid2 size={{ xs: 12 }}>
              <Typography color="#4F4F4F" mt={2}>
                Email Address
              </Typography>
              <TextField
                sx={{
                  backgroundColor: "#fff",
                  marginY: "5px",
                }}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Typography color="#4F4F4F" mt={2}>
                Message
              </Typography>
              <TextField
                sx={{
                  backgroundColor: "#fff",
                  marginY: "5px",
                }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                fullWidth
                multiline
                required
              />
            </Grid2>

            {isSubmitted && (
              <Grid2 item="true" xs={12}>
                <Alert severity="success" sx={{ mt: 1 }}>
                  Form submitted successfully! We'll get back to you soon.
                </Alert>
              </Grid2>
            )}

            <Grid2
              item="true"
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#00aaff",
                  color: "#fff",
                  fontWeight: "medium",
                  ":hover": {
                    backgroundColor: "#0088cc",
                  },
                  mt: 2,
                }}
              >
                Get in touch
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
