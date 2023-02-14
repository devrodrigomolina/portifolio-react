import styled from "styled-components";
import { devices } from "../../../styles/Responsive";


type MenuToogleType = {
  check: boolean
}

export const MenuContainer = styled.div``


export const MenuNavigation = styled.div<MenuToogleType>`
  width: 460px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${devices.mobileL} {
    margin-left: 0;
    align-items: center;
  }
  .active {
    transition: all .3s;
    color: #29a587;
  }
  a {
    color: #FFF;
    line-height: 1;
    font-family: "Jost";
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 1.3rem;
    font-weight: 700;
    transition: all .7s ;
    opacity: ${props => props.check ? '1' : '0'};
    &:hover {
      color: #29a587;
    }
  }
 
  .sociais {
    max-width: 120px;
    color: #FFF;
  }
`;
export const MenuToggle = styled.div<MenuToogleType>`
  width: ${props => props.check ? '35%' : '0'};
  @media ${devices.laptop} {
    width: ${props => props.check ? '100%' : '0'};
  }
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 1s cubic-bezier(0.3, 0, 0.3, 1);
  -webkit-transition: all 1s cubic-bezier(0.3, 0, 0.3, 1);
  background: #31363c;
  border-left: 2px solid rgba(255, 255, 255, 0.09);
  clip-path: polygon(${props => props.check ? '0 0, 100% 0%, 100% 100%, 0 100%' : '0 0, 100% 0%, 100% 100%, 105% 100%'});
  .lateral-bar {
    height: 600px;
    position: absolute;
    transform: scale(-1);
    transform: rotateX(180deg);
    transition: all .2s;
    left: 90px;
    opacity: ${props => props.check ? '1' : '0'};
  }
`;

export const Label = styled.label<MenuToogleType>`
  display: flex;
  flex-direction: column;
  width: 40px;
  position: absolute;
  right: 40px;
  z-index: 999;
  @media ${devices.tablet} {
    width: 35px;
  }

  cursor: pointer;
  span {
    background: #fff;
    border-radius: 10px;
    height: 4px;
    @media ${devices.tablet} {
      height: 3px;
      margin: 4px 0;
    }
    margin: 5px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:nth-of-type(1) {
      width: 50%;
    }
    &:nth-of-type(2) {
      width: 100%;
    }
    &:nth-of-type(3) {
      width: 75%;
    }
  }
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:${props => props.check ? 'checked' : ''} ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
    @media ${devices.tablet} {
      transform: rotatez(45deg) translate(3px, 0px);
    }
  }

  input[type="checkbox"]:${props => props.check ? 'checked' : ''} ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type="checkbox"]:${props => props.check ? 'checked' : ''} ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(20px, -9px) rotatez(45deg);
    @media ${devices.tablet} {
      transform: translate(16px, -7px) rotatez(45deg);
    }
  }
`;
