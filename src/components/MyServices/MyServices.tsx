import React from "react";
import Cards from "../Cards/Cards";
import Titles from "../Titles/Titles";
import * as C from "./style";
import { ServicesJson } from "./Services";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import LateralBar from "../LateralBar/LateralBar";


const MyServices = () => {
  return (
    <C.ContainerServices>
      <Titles title="OQUE EU FAÇO" subtitle="meus" secondSubtitle="serviços" />
      
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {ServicesJson?.map((service) => (
          <SwiperSlide className="swiper-slide">
            <Cards title={service.title} height={396} subtitle={service.subtitle} desc={service.desc} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bar-lateral">
        <LateralBar />
      </div>
      <h1 className="bg-text">Serviços</h1>
    </C.ContainerServices>
  );
};

export default MyServices;
