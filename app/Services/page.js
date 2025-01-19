import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
  Grid2,
} from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices"; // Example icons, replace as needed
import WebIcon from "@mui/icons-material/Web";
import SearchIcon from "@mui/icons-material/Search";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

// Import your team illustration (replace with the actual path)

const ServiceItem = ({ icon, title, description }) => (
  <Grid2 item="true" xs={12} sm={6} md={3}>
    <Paper
      elevation={3}
      sx={{ p: 3, textAlign: "center", borderRadius: "16px" }}
    >
      {icon}
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  </Grid2>
);

export default function ServicesSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's
        </Typography>
      </Box>

      <Grid2 container spacing={2} sx={{ mb: 8 }}>
        <Grid2 item="true" size={5}>
          <ServiceItem
            icon={<DevicesIcon sx={{ fontSize: 40, color: "#673ab7" }} />}
            title="Mobile Applications"
            description="The simplest but robust technology to accompany with you"
          />
        </Grid2>
        <Grid2 item="true" size={5}>
          <ServiceItem
            icon={<WebIcon sx={{ fontSize: 40, color: "#e91e63" }} />}
            title="Web Application"
            description="Platform independent business solutions for maximum availability"
          />
        </Grid2>
        <Grid2 item="true" size={5}>
          <ServiceItem
            icon={<SearchIcon sx={{ fontSize: 40, color: "#00bcd4" }} />}
            title="SEO"
            description="Let the world find you on top of others"
          />
        </Grid2>
        <Grid2 item="true" size={5}>
          <ServiceItem
            icon={<ViewInArIcon sx={{ fontSize: 40, color: "#4caf50" }} />}
            title="AR/VR Solutions"
            description="Advanced autonomous technologies to make life simple"
          />
        </Grid2>
      </Grid2>

      {/* Bottom section */}
      <Grid2
        container
        spacing={4}
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid2 item="true" size={6} xs={12} md={6}>
          <Typography variant="h5" gutterBottom color="primary">
            <span>Lorem Ipsum </span>
            <span style={{ color: "black" }}>
              is simply dummy text of the printing.
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            KODEX TECHNOLOGY (PVT) LTD team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS.
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            KODEX TECHNOLOGY (PVT) LTD Team of experienced and website builders
            measuring dozens
          </Typography>
          <br />
          <Button variant="contained">Contact us</Button>
        </Grid2>
        <Grid2
          item="true"
          size={6}
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 0 }, // Add margin-bottom for mobile
          }}
        >
          {/* Team illustration */}
          <img
            src="https://d2yq1wt6p3tg8m.cloudfront.net/assets/images/how-we-work/team-of-agile-developers.png" // Replace with actual image source
            alt="Team Illustration"
            width="100%"
            height="auto"
            style={{
              maxWidth: "500px", // Ensure the image doesn't grow too large
              borderRadius: "8px",
            }}
          />
        </Grid2>
      </Grid2>
    </Container>
  );
}
