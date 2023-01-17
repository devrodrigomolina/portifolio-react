import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  
  }
  img {
    width: 100%;
    display: block;
  }
  .bg-text {
    font-size: 18vw;
    position: relative;
    bottom: 220px;
    color: rgba(255, 255, 255, 0.02);
    text-align: center;
    font-weight: bold;
    font-family: "Caveat", cursive;
    z-index: 0;
    cursor: default;
  }
`