import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(255, 255, 255, 0.09);
  @media ${devices.laptop} {
    height: 230px;
    margin-top: 100px;
    flex-direction: column;
    text-align: center;
  }
  .sociais-footer {
    display: inline-block;
    @media ${devices.laptop} {
      margin-top: 30px;
    }
  }
  .copyright,
  .developer {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    line-height: 37px;
    color: white;
    span {
      color: #29a587;
    }
  }
`;
