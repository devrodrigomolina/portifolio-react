import styled, { createGlobalStyle } from "styled-components";
import { devices } from "./Responsive";

export const GlobalStyles = createGlobalStyle`
 *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    -webkit-touch-callout: none;  /* iPhone OS, Safari */
    -webkit-user-select: none;    /* Chrome, Safari 3 */
    -khtml-user-select: none;     /* Safari 2 */
    -moz-user-select: none;       /* Firefox */
    -ms-user-select: none;        /* IE10+ */
    user-select: none;  
  }
  a {
    text-decoration: none;
    color: #ffffffb7;
  }
  ul {
    list-style: none;
  }
  html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  body {
    background-color: #222831;
    font-family: 'Jost', sans-serif;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar {
  width: 0.8em;
  border-radius: 20px;
  border: none;
  background-color: #1d222a;
  
}
body::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: #29a587;
  transition: all .3s;
  &:hover {
    background-color: #1e836a;
  }
}


  a {
    cursor: pointer;
    text-decoration: none;
  }
  img {
    width: 100%;
    display: block;
  }
  input {
    position: relative;
    padding: 0 30px;
    display: block;
    width: 100%;
    height: 60px;
    font-family: "Jost";
    font-size: 16px;
    outline: 0;
    font-weight: 400;
    border-radius: 30px;
    color: #fff;
    background: #1d222a;
    border: 2px solid #a3a5a7;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
  }

  .bg-text {
    font-size: 18vw;
    position: relative;
    bottom: 220px;
    color: rgba(255, 255, 255, 0.02);
    text-align: center;
    font-weight: bold;
    font-family: "Caveat", cursive;
    z-index: -7;
    cursor: default;
  }

  .mySwiper {
    display: flex;
    width: 100vw;
    max-width: 70vw;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    @media ${devices.laptopL} {
      max-width: 85vw;
      padding: 0 0px;
    }
    @media ${devices.mobileM && devices.mobileL} {
      max-width: 90vw;
      padding: 0;
    }
    .swiper-slide {
      display: flex;
      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
