import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerTitle = styled.div`
 text-align: center;
 margin-bottom: 80px;
  .title {
    margin-top: 0;
    margin-bottom: 10px;
    font-family: "Jost";
    font-size: 44px;
    line-height: 1.3;
    color: white;
    font-weight: 700;
    /* text-transform: uppercase; */
    letter-spacing: 0.05em;
    @media ${devices.mobileL} {
      font-size: 24px;
    }
  }
  .container-subtitle {
    text-align: center;
    /* text-transform: uppercase; */
    .subtitle {
      font-size: 1rem;
      color: #29a587;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      line-height: 1;
      font-weight: 700;
      @media ${devices.mobileL} {
        font-size: 12px;
      }
    }
    .second-subtitle {
      font-size: 1.4rem;
      color: white;
      font-weight: bold;
      font-family: "Caveat", cursive;
      margin-left: 10px;
      @media ${devices.mobileL} {
        font-size: 16px;
        margin-left: 0;
      }
    }
  }
`