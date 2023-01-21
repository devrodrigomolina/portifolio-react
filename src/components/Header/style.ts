import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const Header = styled.header`
  width: 100%;
  height: 90px;
  padding: 30px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #1d222a;
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.div`
  cursor: pointer;
  width: 350px;
  font-size: 1.2rem;
  a {
    color: white;
  }
  @media ${devices.tablet} {
    width: 280px;
    font-size: 12px;
  }
  @media ${devices.mobileL} {
    width: 240px;
    font-size: 11px;
  }
  span {
    color: #29A587;
  }
`

export const MenuItens = styled.div`

`