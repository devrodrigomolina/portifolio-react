import styled from "styled-components";
import pat2 from "../../assets/pat2.png";
import { devices } from "../../styles/Responsive";

export const ContainerCards = styled.div`
  .bg-text {
    font-size: 18vw;
    position: relative;
    bottom: 300px;
    color: #353a41b9;
    text-align: center;
    font-style: italic;
    font-weight: 100;
    font-family: "Caveat Brush", cursive;
    z-index: -1;
    cursor: default;
  }

  .bar-lateral {
    margin-right: 100px;
  }
  .mySwiper {
    width: 100vw;
    max-width: 70vw;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media ${devices.mobileM && devices.mobileL} {
      max-width: 90vw;
      padding: 0;
    }
    .swiper-slide {
      width: 398px;
      margin-right: 40px;
      height: 396px;
      background: #1d222a;
      padding: 30px 35px;
      border-radius: 18px;
      position: relative;
      overflow: hidden;
   
      .infos-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: white;
        .title {
          font-size: 1rem;
          margin-bottom: 50px;
        }
        .subtitle {
          margin-bottom: 10px;
          @media ${devices.laptopL} {
            font-size: 1.6rem;
          }
        }
        .desc {
          text-align: start;
          opacity: 0.8;
          font-size: 1.1rem;
          @media ${devices.laptopL} {
            font-size: 1rem;
          }
        }
        .arrow {
          height: 22px;
          line-height: 22px;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          bottom: 20px;
          display: inline-block;
          vertical-align: top;
          font-size: 16px;
          cursor: pointer;
          color: white;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
          -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
          &:hover {
            .icon {
              margin-left: 8px;
            }
          }
          .icon {
            margin-left: 13px;
            position: relative;
            left: 0;
            top: 3px;
            font-weight: 900;
            color: #29a587;
            transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
            -webkit-transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
          }
        }
        .image-pat {
          opacity: 0.6;
          filter: invert(1);
          position: absolute;
          right: -24px;
          bottom: -24px;
          width: 141px;
          height: 141px;
          background-image: url(${pat2});
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          @media ${devices.laptopL} {
            width: 100px;
            height: 100px;
          }
        }
      }
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
      margin-top: 60px;

      .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        top: 0;
        display: inline-block;
        border-radius: 50%;
        opacity: 1 !important;
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
          content: "";
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
  }
`;
