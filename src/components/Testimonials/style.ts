import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerTestimonials = styled.div`
  background-color: transparent;
  background-image: linear-gradient(180deg, #222831 0%, #222831 100%);
  position: relative;
  
  .bar-lateral {
    position: absolute;
    height: 660px;
    right: 0;
    top: 100px;
    z-index: 10;
    margin-right: 100px;
  }
  .bg-text {
    @media ${devices.tablet || devices.mobileL} {
      bottom: 260px;
    }
  }
`;
