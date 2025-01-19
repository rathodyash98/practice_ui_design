"use client";
import {
  Container,
  Box,
  Grid2,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ backgroundColor: "#e1f5fe" }}>
        <Box>
          <Grid2
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Grid2 item xs={12} md={6} size={6} sx={{ padding: 3, mx: 4 }}>
              <Typography variant="h4" color="#1090CB">
                <span style={{ color: "#000" }}>Experienced </span>
                mobile and web
                <span style={{ color: "#000" }}>
                  applications and website builders measuring.
                </span>
              </Typography>
              <Typography variant="body1" color="textSecondary" mt={2}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button sx={{ mx: 2 }} variant="contained">
                  Contact Us
                </Button>
                <Button variant="outlined">View More</Button>
              </Box>
            </Grid2>
            <Grid2 item xs={12} md={6} sx={{ my: 20 }}>
              <img
                width={400}
                src="https://www.writemypapers.org/site/public/img_2021/bill6.png"
                alt="illustration"
                sx={{
                  width: "40px",
                  maxWidth: "400px",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Grid2>
          </Grid2>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            my: "20px",
          }}
        >
          {/* Content Section */}
          <Grid2 item xs={12} md={6} size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
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
                  marginRight: { xs: "1rem", md: "1.8rem" },
                  marginBottom: "40px",
                  boxShadow: 1,
                  backgroundColor: "#08d3bb",
                }}
              >
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  style={{ color: "white" }}
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
            <Typography variant="h4" component="h1" color="#1090CB" mt={5}>
              <span>Lorem Ipsum </span>
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
          <Grid2 item xs={12} md={6} size={6}>
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
                width="100%"
                height="auto"
                alt="content-img"
                style={{
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="lg">
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            my: "20px",
          }}
        >
          {/* Image Section */}
          <Grid2 item xs={12} md={6} size={6}>
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
                src="https://cdn-ikpginp.nitrocdn.com/PRntyBdDPhmusWKVDuNFHSODyQxBrsGD/assets/images/optimized/rev-31bfdad/www.deuglo.com/wp-content/uploads/2024/08/Landing-Page-Design-Company-in-Noida-Bangalore-India-Deuglo.png"
                width="100%"
                height="auto"
                alt="content-img"
                style={{
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid2>

          {/* Content Section */}
          <Grid2 item xs={12} md={6} size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
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
                  marginRight: { xs: "1rem", md: "1.8rem" },
                  marginBottom: "40px",
                  boxShadow: 1,
                  backgroundColor: "#81d4fa",
                }}
              >
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  style={{ color: "white" }}
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
            <Typography variant="h4" component="h1" color="#1090CB" mt={5}>
              <span>Lorem Ipsum </span>
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
        </Grid2>
      </Container>

      <Container maxWidth="lg">
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            my: "20px",
          }}
        >
          {/* Content Section */}
          <Grid2 item xs={12} md={6} size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
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
                  marginRight: { xs: "1rem", md: "1.8rem" },
                  marginBottom: "40px",
                  boxShadow: 1,
                  backgroundColor: "#673ab7",
                }}
              >
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  style={{ color: "white" }}
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
            <Typography variant="h4" component="h1" color="#1090CB" mt={5}>
              <span>Lorem Ipsum </span>
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
          <Grid2 item xs={12} md={6}>
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
                src="https://vrsistem.com/wp-content/uploads/2019/09/home-man2.png"
                width="100%"
                height="auto"
                alt="content-img"
                style={{
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>

      <Container maxWidth="lg">
        <Grid2
          container
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              justifyContent: "space-between",
            },
          }}
        >
          {/* Use flexbox for horizontal layout */}
          <Grid2
            item="true"
            xs={12}
            sm={6}
            backgroundColor="#eceff1"
            borderRadius={6}
            size={5.5}
            sx={{ minWidth: 275, position: "relative" }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Lorem Ipsum is simply
              </Typography>
              <Typography variant="body2" color="textSecondary">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button size="small" variant="contained">
                View More
              </Button>
            </CardActions>
          </Grid2>

          <Grid2
            item="true"
            xs={12}
            sm={6}
            backgroundColor="#42a5f5"
            borderRadius={6}
            size={5.5}
            sx={{ minWidth: 275, position: "relative" }}
          >
            <CardContent>
              <Typography
                variant="h5"
                sx={{ color: "white" }}
                gutterBottom
                fontWeight="bold"
              >
                Lorem Ipsum is simply
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  color: "#007bff",
                  backgroundColor: "white",
                }}
              >
                View More
              </Button>
            </CardActions>
          </Grid2>
        </Grid2>
        <br />
        <Box>
          <Typography
            component="div"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            You will be in good Company
          </Typography>
          <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
            {/* Image Section */}
            <Grid2
              item="true"
              xs={12}
              sm={10}
              md={8}
              lg={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap", // Allows the images to wrap on small screens
                justifyContent: "center", // Center images horizontally
                gap: 2, // Adds space between images
                alignItems: "center", // Align images vertically
              }}
            >
              {/* Individual Image Items */}
              <Grid2 item="true" xs={6} sm={3} size={3}>
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQiW8GIufaGFQIwXhw6wxeqyNRFh5Vez_M9UA2zNxyKJuBq1rjU"
                  alt="Company 1"
                  style={{ width: "100%", height: "50%", borderRadius: "8px" }}
                />
              </Grid2>
              <Grid2 item="true" xs={6} sm={3} size={3}>
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQFstQS_kSuubg/company-logo_200_200/company-logo_200_200/0/1630568434624/caspio_logo?e=2147483647&v=beta&t=XhI9dC3xXeVR4iBH86dJThQN8sqdPlY09aoWLp2CObM"
                  alt="Company 2"
                  style={{ width: "100%", height: "50%", borderRadius: "8px" }}
                />
              </Grid2>
              <Grid2 item="true" xs={6} sm={3} size={3}>
                <img
                  src="https://cdn.shortpixel.ai/spai/w_656+q_lossless+ret_img+to_auto/www.voyced.eu/wp-content/uploads/2020/03/HyperGrid.jpg"
                  alt="Company 3"
                  style={{ width: "100%", height: "50%", borderRadius: "8px" }}
                />
              </Grid2>
              <Grid2 item="true" xs={6} sm={3} size={3}>
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhfjewT9yQGPu63-tCWXRHs0dcsbHQKzB6Sc5YEqS5vpa7POrt"
                  alt="Company 4"
                  style={{ width: "100%", height: "50%", borderRadius: "8px" }}
                />
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
        <Box sx={{ background: "#e1f5fe", height: "400px" }}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
