"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Subscribe from "./Items/Subscribe";

const TeamInfo = [
  {
    name: "John kabras",
    role: "CEO",
    image: "/member1.jpg",
  },
  {
    name: "Phillips Shene Morris",
    role: "COO",
    image: "/member2.jpg",
  },
  {
    name: "Equarn Shamir Mohmmad",
    role: "Tech Lead",
    image: "/member3.jpg",
  },
  {
    name: "Janka Indrajith",
    role: "Head of UX",
    image: "/member4.jpg",
  },
];
const TeamSection = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h5" gutterBottom paddingBottom={2}>
            Our Team
          </Typography>
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            style={{ paddingBottom: "80px" }}
          >
            {TeamInfo.map((member, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: "240px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "white",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                      width: "240px",
                      height: "220px",
                    }}
                  />
                  <Typography
                    variant="body"
                    color="textSecondary"
                    marginTop={2}
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
          <style jsx global>{`
            .swiper-pagination-bullet {
              background-color: #cfcfcf;
              width: 10px;
              height: 10px;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background-color: #6e00fa;
              width: 24px;
              height: 10px;
              border-radius: 7px;
            }
          `}</style>
        </Box>
      </Container>
      <Subscribe />
    </>
  );
};

export default TeamSection;
