import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const AboutSection = styled.section`
  height: auto;
  margin-top: 140px;
  background-color: transparent;
  background-image: linear-gradient(0deg, #31363c 0%, #222831 100%);
  @media ${devices.tablet || devices.mobileL} {
    margin-top: 0;
  }
  .bg-text {
    @media ${devices.tablet || devices.mobileL} {
      bottom: 260px;
    }
  }
`;
export const AboutContainer = styled.section`
  max-width: 80vw;
  min-height: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 60px;
  padding-top: 50px;
  @media ${devices.laptop} {
    flex-direction: column;
    align-items: center;
  }
  @media ${devices.tablet || devices.mobileL} {
    margin-top: 60px;
    max-width: 100vw;
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
        font-family: "Caveat", cursive;
        font-size: 1.6rem;
        font-weight: bold;
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
        margin-top: 430px;
      }
    }
    .sociais {
      margin-top: 40px;
      display: inline-block;
      @media ${devices.laptop} {
        align-items: center;
        justify-content: center;
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
    z-index: -1;
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
      top: -18%;
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
      width: 105%;
      height: 800px;
      position: absolute;
      left: -0px;
      top: -138px;
      transform: rotate(5deg);
      @media ${devices.laptopL} {
        height: 695px;
      }
      @media ${devices.laptop} {
        height: 620px;
      }
      @media ${devices.tablet} {
        height: 480px;
        top: -110px;
      }
      @media ${devices.mobileL} {
        height: 365px;
        top: -65px;
      }
    }
    .image-pat1,
    .image-pat2,
    .image-pat3 {
      opacity: 0.5;
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
  .infos-git {
    position: absolute;
    top: 400px;
    left: -125px;
    z-index: 12;
    @media ${devices.mobileL} {
      top: 150px;
      left: -40px; 
    }
    .git-stats {
      width: 100%;
      height: 180px;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      .stats {
        color: #fff;
        border: 2px solid #a3a5a7;
        background-color: #1d222a;
        box-shadow: 5px 5px rgb(255 255 255 / 10%);
        margin: 0;
        display: flex;
        align-items: center;
        box-shadow: 5px 5px rgb(0 0 0 / 20%);
        height: 82px;
        border-radius: 82px;
        width: 250px;
        padding: 0 20px;
        @media ${devices.mobileL} {
          width: 150px;
          height: 52px; 
        }
        &:nth-child(1) {
          margin: -10px 0 0 80px;
          @media ${devices.mobileL} {
            margin: 0;
          }
        }
        &:nth-child(2) {
          margin: 55px 0 0 150px;
          @media ${devices.mobileL} {
            margin: 50px 0 0 40px; 
          }
        }
        .num {
          display: block;
          font-size: 37px;
          line-height: 20px;
          text-transform: uppercase;
          font-weight: 700;
          width: 50%;
          text-align: center;
          span {
            color: #29a587;
          }
          @media ${devices.mobileM} {
            width: 40%;
          }
          @media ${devices.mobileL} {
            width: 40%;
            font-size: 20px;
          }
        }
        .value {
          display: block;
          width: 50%;
          text-align: left;
          font-size: 13px;
          line-height: 20px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
          span {
            color: #29a587;
          }
          @media ${devices.mobileL} {
            font-size: 10px;
          }
          span {
            color: #29a587;
          }
        }
      }
    }
  }
`;
