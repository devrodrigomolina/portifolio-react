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
    background-color: transparent;
  background-image: linear-gradient(0deg, #31363c 0%, #222831 100%);
  }
  img {
    width: 100%;
    display: block;
  }
`