import * as React from "react";
import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Container } from "@mui/material";

const data = [
  {
    title: "Slide 1",
    description: "Description for slide 1",
    image: "/Rectangle12.jpg",
  },
  {
    title: "Slide 2",
    description: "Description for slide 2",
    image: "/Rectangle13.jpg",
  },
  {
    title: "Slide 3",
    description: "Description for slide 3",
    image: "/Rectangle14.jpg",
  },
];

const Carousel = () => {
  const theme = useTheme();
  const [sliderRef] = useKeenSlider(
    [
      {
        loop: true, // Enables infinite looping
        mode: "snap", // Snaps to slides
        slides: {
          perView: 1, // Number of slides visible at once
          spacing: 16, // Spacing between slides (in pixels)
        },
      },
    ],
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000); // Autoplay interval (3 seconds)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("animationStarted", () => {
          nextTimeout();
        });
        slider.on("animationEnded", () => {
          slider.update();
        });
      },
    ]
  );

  return (
    <Container maxWidth="md">
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {" "}
        {/* Important for containing the slider */}
        <div ref={sliderRef} className="keen-slider">
          {data.map((slide, index) => (
            <Box
              key={index}
              className="keen-slider__slide"
              sx={{ padding: theme.spacing(2) }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {slide.image && (
                  <Box sx={{ position: "relative", height: 200 }}>
                    {/* Fixed Height for Image */}
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="10vw"
                    />
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Ensures content fills remaining space */}
                  <Typography variant="h5" component="h2" gutterBottom>
                    {slide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {slide.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Carousel;
