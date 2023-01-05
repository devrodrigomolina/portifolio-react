import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerLateralBar = styled.div`
  width: 2px;
  height: 100%;
  background: #a3a5a7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${devices.laptop} {
    display: none;
  }
  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid #a3a5a7;
    background-color: #1D222A;
    display: flex;
    box-shadow: 7px 7px 1px #a3a5a730;
    z-index: 10;
    
  }
  .image-pat {
    width: 200px;
    position: absolute;
    bottom: -150px;
    right: -50px;
    z-index: 9;
    filter: invert(1);
    position: absolute;
  }
`