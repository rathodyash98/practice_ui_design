import { Box, Container, Grid2, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Subscribe from "../Items/Subscribe";
import InfoCard from "../Items/InfoCard";
import CompanyLogo from "../Items/Companylogo";

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
            <Grid2
              item="true"
              xs={12}
              md={6}
              size={6}
              sx={{ padding: 3, mx: 4 }}
            >
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
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                <Button
                  sx={{ mx: 2, width: { xs: "100%", sm: "auto" } }}
                  variant="contained"
                >
                  Contact Us
                </Button>
                <Button
                  sx={{ width: { xs: "100%", sm: "auto" } }}
                  variant="outlined"
                >
                  View More
                </Button>
              </Box>
            </Grid2>
            <Grid2 item="true" xs={12} md={6} sx={{ my: 20 }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            py: "40px",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EFEAFF",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/website-content 1.png" alt="web" />
            </Box>
            <Box>
              <Typography variant="h6">Web Application</Typography>
              <Typography variant="body" color="textSecondary">
                Lorem Ipsum is simply
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#ECFFDA",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/seo-tag 1.png" alt="seo" />
            </Box>
            <Box>
              <Typography variant="h6">SEO</Typography>
              <Typography variant="body" color="textSecondary">
                Lorem Ipsum is simply
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#DAE6FF",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/immersive 1.png" alt="ar/vr" />
            </Box>
            <Box>
              <Typography variant="h6">AR/VR Solutions</Typography>
              <Typography variant="body" color="textSecondary">
                Lorem Ipsum is simply
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#FFE5DA",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/coding (1) 1.png" alt="mob" />
            </Box>
            <Box>
              <Typography variant="h6">Mobile Applications</Typography>
              <Typography variant="body" color="textSecondary">
                Lorem Ipsum is simply
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ borderBottom: "1px solid #D2D2D2" }}></Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            marginY: "50px",
          }}
        >
          <Typography variant="h4" component={"h1"} gutterBottom>
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
          <Typography variant="body" color="textSecondary" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum has been the industry's
          </Typography>
        </Box>
        <Grid2 container rowSpacing={6} direction={"row"}>
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
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
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
                    marginRight: "1.8rem",
                    marginBottom: "40px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    style={{ color: "#08D3BB", backgroundColor: "#fff" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h5" color="#000000">
                    Lorem Ipsum is simply dummy text
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Lorem Ipsum is simply dummy text
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h4" component="h1" color="#1090CB">
                Lorem Ipsum
                <span style={{ color: "black" }}>
                  {" "}
                  is simply dummy text of the printing.
                </span>
              </Typography>
              <Typography variant="body1" color="textSecondary" mt={5}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web application builders measuring dozens of completed projects.
                We build and develop mobile applications for several top
                platforms, including Android & iOS.
              </Typography>
            </Grid2>

            {/* Image Section */}
            <Grid2 size={{ xs: 12, md: 6 }}>
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
                <Image
                  src="/Recent-1.png"
                  width={500}
                  height={500}
                  alt="content-img"
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0px 10px 10px 10px black",
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>

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
            <Grid2 size={{ xs: 12, md: 6 }}>
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
                <Image
                  src="/website-mockup.png"
                  width={500}
                  height={500}
                  alt="content-img"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Grid2>
            {/* Content Section */}
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
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
                    marginRight: "1.8rem",
                    marginBottom: "40px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    style={{ color: "#1090CB", backgroundColor: "#fff" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h5" color="#000000">
                    Lorem Ipsum is simply dummy text
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Lorem Ipsum is simply dummy text
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h4" component="h1" color="#1090CB">
                Lorem Ipsum
                <span style={{ color: "black" }}>
                  {" "}
                  is simply dummy text of the printing.
                </span>
              </Typography>
              <Typography variant="body1" color="textSecondary" mt={5}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web application builders measuring dozens of completed projects.
                We build and develop mobile applications for several top
                platforms, including Android & iOS.
              </Typography>
            </Grid2>
          </Grid2>

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
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
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
                    marginRight: "1.8rem",
                    marginBottom: "40px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFaceSmile}
                    style={{ color: "#9208D3", backgroundColor: "#fff" }}
                  />
                </Box>
                <Box>
                  <Typography variant="h5" color="#000000">
                    Lorem Ipsum is simply dummy text
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Lorem Ipsum is simply dummy text
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h4" component="h1" color="#1090CB">
                Lorem Ipsum
                <span style={{ color: "black" }}>
                  {" "}
                  is simply dummy text of the printing.
                </span>
              </Typography>
              <Typography variant="body1" color="textSecondary" mt={5}>
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web application builders measuring dozens of completed projects.
                We build and develop mobile applications for several top
                platforms, including Android & iOS.
              </Typography>
            </Grid2>

            {/* Image Section */}
            <Grid2 size={{ xs: 12, md: 6 }}>
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
                <Image
                  src="/layer1-guy1.png"
                  width={500}
                  height={500}
                  alt="content-img"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
      <InfoCard />
      <CompanyLogo />
      <Subscribe />
    </>
  );
};

export default Home;
