"use client";

import { Box, Grid2, Typography } from "@mui/material";
import { Container } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import WebIcon from "@mui/icons-material/Web";
import RocketIcon from "@mui/icons-material/Rocket";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CloudIcon from "@mui/icons-material/Cloud";

const content = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid2 container>
          <Grid2 item="true" width={700}>
            <Typography variant="h4" color="primary" fontWeight="bold">
              Lorem Ipsum is simply dummy text of the printing.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={5}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS. We build and develop mobile
              applications for several top platforms, including Android & IOS.
            </Typography>
          </Grid2>
        </Grid2>

        <br />
        <Grid2 container>
          <Grid2 item="true" size={6}>
            <Typography variant="h5" fontWeight="bold">
              Lorem Ipsum is simply dummy text of the printing.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={5}>
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS. We build and develop mobile
              applications for several top platforms, including Android & IOS.
            </Typography>
          </Grid2>
          <Grid2 item="true" size={6}>
            <Box sx={{ py: 5 }}>
              <Grid2 container justifyContent="center" spacing={3}>
                {/* Web Application */}
                <Grid2 item="true" xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      backgroundColor: "#F9F9F9",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#FFEAEA",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <WebIcon sx={{ color: "#FF5252", fontSize: 30 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
                      Web Application
                    </Typography>
                  </Card>
                </Grid2>

                {/* Mobile Applications */}
                <Grid2 item="true" xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      backgroundColor: "#F9F9F9",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#E8F0FF",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SmartphoneIcon sx={{ color: "#2196F3", fontSize: 30 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
                      Mobile Applications
                    </Typography>
                  </Card>
                </Grid2>

                {/* SEO */}
                <Grid2 item="true" xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      backgroundColor: "#F9F9F9",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#E8F8FF",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <RocketIcon sx={{ color: "#00BCD4", fontSize: 30 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
                      SEO
                    </Typography>
                  </Card>
                </Grid2>

                {/* AR/VR */}
                <Grid2 item="true" xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px",
                      backgroundColor: "#F9F9F9",
                      borderRadius: "12px",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#F9E9FF",
                        borderRadius: "50%",
                        width: 50,
                        height: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CloudIcon sx={{ color: "#9C27B0", fontSize: 30 }} />
                    </Box>
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
                      AR/VR
                    </Typography>
                  </Card>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default content;
