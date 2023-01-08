import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const AboutSection = styled.section`
  height: 100vh;
  margin-top: 150px;
  .bg-text {
    font-size: 18vw;
    position: relative;
    bottom: 220px;
    color: #31363cba;
    text-align: center;
    font-style: italic;
    font-weight: 100;
    font-family: "Caveat Brush", cursive;
    z-index: 1;
    cursor: default;
    @media ${devices.tablet || devices.mobileL} {
      bottom: 260px
    }
  }
`;
export const AboutContainer = styled.section`
  max-width: 80vw;
 /*  min-height: 100vh; */
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
  padding-top: 50px;
  @media ${devices.laptop} {
    flex-direction: column;
    align-items: center;
  }
  @media ${devices.tablet || devices.mobileL} {
    padding-top: 0;
  }
  
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 620px;
  z-index: 2;
  display: flex;
  @media ${devices.laptop} {
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
  }
  
  .infos {
    margin: 100px 0 0 100px;
    @media ${devices.laptop} {
      width: 90%;
      margin: 80px 0 0 0;
    }
    @media ${devices.tablet || devices.mobileL} {
      margin: 50px 0 0 0;
    }
    .hello {
      color: white;
      span {
        color: #29a587;
      }
    }
    .name {
      font-size: 5rem;
      @media ${devices.laptop} {
        font-size: 7vw;
      }
      color: white;
      text-shadow: 3px 3px #000000b3;
      span {
        color: #29a587;
        text-shadow: 3px 3px #000000b3;
      }
    }
    .iam {
      color: white;
      .webdev {
        margin-left: 10px;
        font-family: "Caveat Brush", cursive;
        font-size: 1.6rem;
        font-weight: 400;
        font-style: italic;
      }
    }
    .aboutme {
      font-size: 1.2rem;
      font-weight: 400;
      margin-right: 150px;
      color: #a3a5a7;
      margin-top: 40px;
      @media ${devices.laptop} {
        margin-top: 740px;
        margin-right: 0;
      }
      @media ${devices.tablet || devices.mobileL} {
        margin-top: 590px;
      }
    }
    .sociais {
      margin-top: 40px;
      display: flex;
      color: #fff;
      font-size: 1.5rem;
      @media ${devices.laptop} {
        align-items: center;
        justify-content: center;
      }
      .linkedin,
      .github,
      .whatsapp {
        margin-right: 15px;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
          color: #29a587;
        }
      }
    }
    .btns {
      margin-top: 40px;
      .btn {
        position: relative;
        overflow: hidden;
        display: inline-block;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        height: 56px;
        line-height: 52px;
        outline: none !important;
        cursor: pointer;
        padding: 0 40px;
        transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
        border: 2px solid #000;
        background: transparent;
        box-shadow: 5px 5px rgb(0 0 0 / 20%);
        border-radius: 56px;
        color: #fff;
        border-color: #a3a5a7;
        box-shadow: 5px 5px rgb(255 255 255 / 10%);

        &:hover {
          background: #29a587;
        }
      }
      .skills {
        padding-left: 70px;
        height: 56px;
        line-height: 56px;
        position: relative;
        display: inline-block;
        vertical-align: top;
        font-size: 13px;

        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        text-decoration: none;
        transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
        -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
        color: #fff;
        &::before {
          background: #a3a5a7;
          content: "";
          position: absolute;
          left: -1px;
          top: 50%;
          margin-top: -1px;
          height: 2px;
          width: 40px;
        }
      }
    }
  }
`;

export const RigthSide = styled.div`
  z-index: 4;
  width: 60%;
  position: relative;
  @media ${devices.laptop} {
    width: 70%;
    height: 500px;
    position: absolute;
    top: 530px;   
  }
  @media ${devices.tablet || devices.mobileL} {
    top: 420px; 
  }
  .container-photo {
    width: 600px;
    height: 600px;
    background-color: #29a587;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 10%;
    @media ${devices.laptopL} {
      width: 500px;
      height: 500px;
      top: 15%;
    }
    @media ${devices.laptop} {
      width: 460px;
      height: 430px;
      right: 0px;
      top: 5%;
    }
    @media ${devices.tablet} {
      width: 340px;
      height: 330px;
    }
    @media ${devices.mobileL} {
      width: 270px;
      height: 270px;
      right: 0;
    }
    
    .myphoto {
      border-bottom-left-radius: 47%;
      border-bottom-right-radius: 47%;     
      height: 730px;
      position: absolute;
      top: -115px;
      @media ${devices.laptopL} {
        height: 630px;
      }
      @media ${devices.laptop} {
        height: 550px;    
      }
      @media ${devices.tablet} {
        height: 450px;    
      }
      @media ${devices.mobileL} {
        height: 365px; 
        top: -90px;
      }
    
    }
    .image-pat1,
    .image-pat2,
    .image-pat3 {
      opacity: 0.6;
      filter: invert(1);
      position: absolute;
      z-index: -1;
    }
    .image-pat1 {
      width: 200px;
      bottom: 60px;
      left: -100px;
      @media ${devices.tablet} {
        width: 110px;    
        left: -70px;
        bottom: 30px;
      }
    }
    .image-pat2 {
      width: 220px;
      top: -100px;
      right: 100px;
      @media ${devices.tablet} {
        width: 120px;
        top: -90px;
        right: 30px;
      }
    }
    .image-pat3 {
      width: 150px;
      bottom: 60px;
      right: -50px;
      @media ${devices.tablet} {
        width: 90px;
        bottom: 60px;
        right: -50px;
      }
    }
  }
`;
