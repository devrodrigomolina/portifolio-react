import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const Header = styled.header`
  width: 100%;
  height: 90px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`
export const Logo = styled.div`
  color: white;
  cursor: pointer;
  width: 350px;
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