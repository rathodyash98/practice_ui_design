import React from "react";
import {
  Box,
  Grid2,
  Avatar,
  Typography,
  TextField,
  Button,
  Container,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Subscribe from "../components/Items/Subscribe";

const Blog = () => {
  const articleImages = [
    "../public/blog/img2.png",
    "../public/blog/img3.png",
    "../public/blog/img4.png",
    "../public/blog/img2.png",
    "../public/blog/img3.png",
    "../public/blog/img4.png",
  ];

  const profileImages = [
    "../public/blog/profile2.png",
    "../public/blog/profile3.png",
    "../public/blog/profile4.png",
    "../public/blog/profile2.png",
    "/public/blog/profile3.png",
    "../public/blog/profile4.png",
  ];

  return (
    <>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={"bold"}
            gutterBottom
          >
            Latest news
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={"bold"}
            color="primary"
            gutterBottom
          >
            Updates
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Lorem Ipsum is simply dummy text of the printing.
          </Typography>
        </Box>

        {/* Search and Filters Section */}
        <Box mb={4} textAlign="center">
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{ width: "60%", maxWidth: 400, marginBottom: 6 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
            {[
              "Lorem Ipsum",
              "Lorem Ipsum",
              "Lorem Ipsum",
              "Lorem Ipsum",
              "Lorem Ipsum",
            ].map((filter, index) => (
              <Button
                key={index}
                variant="contained"
                color={index === 4 ? "primary" : "#1090CB"}
                sx={{
                  borderRadius: "25px",
                  backgroundColor: index === 4 ? "#1090CB" : "#E7EFF3",
                  color: index === 4 ? "#FFFFFF" : "#1090CB",
                  "&:hover": {
                    backgroundColor: index === 4 ? "#0B79A6" : "#DDE7EB",
                  },
                }}
              >
                {filter}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Featured Article */}
        <Grid2
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 5,
            marginY: 8,
          }}
        >
          <Grid2 xs={12} md={6}>
            <img src="../public/blog/img1.png" alt="Featured Article" />
          </Grid2>
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" fontWeight={"bold"} gutterBottom>
              Lorem Ipsum is simply dummy text of <br />
              the printing.
            </Typography>
            <Typography variant="body1" color="textSecondary" mb={4}>
              Lorem Ipsum is simply dummy text of the printing and
              <br /> typesetting industry. Lorem Ipsum has been the industry’s{" "}
              <br />
              standard dummy text ever since.
            </Typography>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Avatar alt="Profile Picture" src="../public/blog/img1.png" />
                <Typography variant="subtitle2" color="textSecondary">
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    Name Here
                  </span>{" "}
                  <br />
                  20/01/2025
                </Typography>
              </Box>
              <Button
                size="small"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginLeft: "auto",
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid2>
        </Grid2>

        {/* Articles Grid */}
        <Grid2
          container
          spacing={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid2 xs={12} sm={6} md={4} pb={4} key={index}>
              <img
                src={articleImages[index]}
                alt={`Article ${index + 1}`}
                height={"150"}
              />
              <Typography
                variant="body1"
                fontWeight={"bold"}
                paddingY={"10px"}
                gutterBottom
              >
                Lorem Ipsum is simply <br />
                dummy text of the printing
              </Typography>
              <Typography variant="body1" color="textSecondary" pb={2}>
                Lorem Ipsum is simply dummy text of <br />
                the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry’s <br />
                standard dummy text ever since.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt={`Profile ${index + 1}`}
                  src={profileImages[index]}
                />
                <Typography variant="subtitle2" color="textSecondary">
                  <span style={{ color: "#000", fontWeight: "bold" }}>
                    Name Here
                  </span>{" "}
                  <br />
                  20/01/20
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Subscribe />
    </>
  );
};

export default Blog;
