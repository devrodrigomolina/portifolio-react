import styled from "styled-components";

export const MenuContainer = styled.div``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 40px;
  cursor: pointer;
  span {
    background: #fff;
    border-radius: 10px;
    height: 4px;
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

  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(8px, 0px);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(20px, -9px) rotatez(45deg);
  }
`;
