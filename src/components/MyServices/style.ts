import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerServices = styled.div`
  margin-top: 100px;
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