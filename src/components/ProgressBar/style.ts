import styled from "styled-components";

type ProgressTypes =  {
  value: number
}

export const ContainerProgressBar = styled.div<ProgressTypes>`
 display: flex;
 align-items: center;
 width: 100%;
 margin-top: 35px;
 height: 2px;
 background: #a3a5a7;
  .progress {
    width: ${(props) => props.value}%;
    height: 2px;
    background-color: #29a587;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }


  .circle {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border: 2px solid #a3a5a7;
    background-color: #1D222A;
    display: flex;
    box-shadow: 7px 7px 1px #a3a5a730;
    z-index: 10;
  }

`