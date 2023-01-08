import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerServices = styled.div`
background-color: transparent;
background-image: linear-gradient(180deg, #31363c 0%, #222831 100%);
.bg-text {
    font-size: 18vw;
    position: relative;
    bottom: 220px;
    color: rgba(255, 255, 255, 0.02);
    text-align: center;
    font-style: italic;
    font-weight: 100;
    font-family: "Caveat Brush", cursive;
    z-index: 0;
    cursor: default;
    @media ${devices.tablet || devices.mobileL} {
      bottom: 260px
    }
  }
padding-top: 100px;
  @media ${devices.laptop} {
    margin-top: 600px;
  }
  @media ${devices.tablet} {
    margin-top: 300px;
  }
  @media ${devices.mobileM || devices.mobileS || devices.mobileL} {
    margin-top: 400px;
  }
`