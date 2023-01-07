import React from "react";
import LateralBar from "../LateralBar/LateralBar";
import * as C from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaArrowRight } from "react-icons/fa";

const Cards = () => {
  return (
    <C.ContainerCards>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
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
        <SwiperSlide className="swiper-slide">
          <div className="infos-card">
            <h3 className="title">DESENVOLVEDOR WEB</h3>
            <h1 className="subtitle">Sites & aplicações</h1>
            <p className="desc">
              Atuo no desenvolvimento de aplicações performática e responsiva
              com as melhores tecnologias do mercado
            </p>
            <a href="#" className="arrow">
              Ver projetos <FaArrowRight className="icon" />
            </a>
            <div className="image-pat" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="infos-card">
            <h3 className="title">DESENVOLVEDOR WEB</h3>
            <h1 className="subtitle">Sites & aplicações</h1>
            <p className="desc">
              Atuo no desenvolvimento de aplicações performática e responsiva
              com as melhores tecnologias do mercado
            </p>
            <a href="#" className="arrow">
              Ver projetos <FaArrowRight className="icon" />
            </a>
            <div className="image-pat" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="infos-card">
            <h3 className="title">DESENVOLVEDOR WEB</h3>
            <h1 className="subtitle">Sites & aplicações</h1>
            <p className="desc">
              Atuo no desenvolvimento de aplicações performática e responsiva
              com as melhores tecnologias do mercado
            </p>
            <a href="#" className="arrow">
              Ver projetos <FaArrowRight className="icon" />
            </a>
            <div className="image-pat" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="infos-card">
            <h3 className="title">DESENVOLVEDOR WEB</h3>
            <h1 className="subtitle">Sites & aplicações</h1>
            <p className="desc">
              Atuo no desenvolvimento de aplicações performática e responsiva
              com as melhores tecnologias do mercado
            </p>
            <a href="#" className="arrow">
              Ver projetos <FaArrowRight className="icon" />
            </a>
            <div className="image-pat" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="infos-card">
            <h3 className="title">DESENVOLVEDOR WEB</h3>
            <h1 className="subtitle">Sites & aplicações</h1>
            <p className="desc">
              Atuo no desenvolvimento de aplicações performática e responsiva
              com as melhores tecnologias do mercado
            </p>
            <a href="#" className="arrow">
              Ver projetos <FaArrowRight className="icon" />
            </a>
            <div className="image-pat" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="infos-card">
            <h3 className="title">DESENVOLVEDOR WEB</h3>
            <h1 className="subtitle">Sites & aplicações</h1>
            <p className="desc">
              Atuo no desenvolvimento de aplicações performática e responsiva
              com as melhores tecnologias do mercado
            </p>
            <a href="#" className="arrow">
              Ver projetos <FaArrowRight className="icon" />
            </a>
            <div className="image-pat" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bar-lateral">
        <LateralBar />
      </div>

      <h1 className="bg-text">Serviços</h1>
    </C.ContainerCards>
  );
};

export default Cards;
