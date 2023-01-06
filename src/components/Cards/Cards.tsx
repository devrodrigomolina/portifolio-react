import React from "react";
import LateralBar from "../LateralBar/LateralBar";
import * as C from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Cards = () => {
  return (
    <C.ContainerCards>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      </Swiper>
      <div className="bar-lateral">
        <LateralBar />
      </div>
    </C.ContainerCards>
  );
};

export default Cards;
