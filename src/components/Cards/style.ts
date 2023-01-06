import styled from "styled-components";

export const ContainerCards = styled.div`
  display: flex;
  text-align: center;
  .bar-lateral {
    margin-right: 100px;
  }
  .mySwiper {
    width: 100vw;
    max-width: 70vw;
    margin: 0 auto;
  }
  .swiper-slide {
    width: 400px;
    margin-right: 40px;
    height: 420px;
    background: #1d222a;
    padding: 30px 35px;
  border-radius: 18px;
  }

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.swiper-pagination {
  position: relative;
    display: inline-block;
    width: auto;
    margin-top: 20px;
  bottom: 40px;
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    top: 0;
    display: inline-block;
    border-radius: 50%;
    opacity: 1!important;
    background-color: black;
    border: 2px solid white;
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
    margin: 0;
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &::before {
      position: absolute;
      left: 0;
      z-index: -1;
      top: 50%;
      content: '';
      width: 100%;
      height: 2px;
      background: white;
      display: block;
    }
  }
  .swiper-pagination-bullet-active {
    width: 13px;
    height: 13px;
    position: relative;
    top: 2px;
    background-color: #29a587;
  }
}
`
