import styled from "styled-components";
import { devices } from "../../styles/Responsive";



export const ContainerResume = styled.div`
  background-color: transparent;
  background-image: linear-gradient(180deg, #31363c 0%, #222831 100%);
  margin-bottom: 300px;
 .titles {
    font-size: 1.8rem;
    text-align: center;
    color: white;
    border-bottom: 2px solid #a3a5a7;
    padding-bottom: 25px;
  }
`

export const ContainerHistory = styled.div`
  display: flex;
  width: 70vw;
  margin: 0 auto;
  position: relative;
  @media ${devices.laptop} {
    width: 90vw;
    align-items: center;
  }
  .bar {
    position: absolute;
    height: calc(100% + 150px);
    left: -100px;
  } 
  @media ${devices.laptop} {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  width: 50%;
  margin-right: 45px;
  position: relative;
  @media ${devices.laptop} {
    width: 90%;
    margin-bottom: 130px;
    margin-right: 0;
  }
`



export const RightSide = styled.div`
  width: 50%;
  margin-left: 45px;
  @media ${devices.laptop} {
    margin-left: 0;
    width: 90%
  }
  `