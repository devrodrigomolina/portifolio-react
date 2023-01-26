import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerContactForm = styled.div`
  background-color: transparent;
  background-image: linear-gradient(180deg, #222831 0%, #222831 100%);
`;
export const ContainerContact = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media ${devices.laptop} {
    width: 95vw;
    flex-direction: column;
    align-items: center;
  }
`;
export const LeftSideInfos = styled.div`
  width: 40%;
  position: relative;
  @media ${devices.laptop} {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .principal-title {
    margin-bottom: 60px;
    display: flex;
    align-items: center;

    .container-icon {
      width: 55px;
      height: 55px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #a3a5a7;
      background-color: #1d222a;
      box-shadow: 5px 5px 0px 0px rgb(255 255 255 / 10%);
      color: #a3a5a7;
      position: relative;
      &::after {
        margin-top: -1px;
        content: "";
        background-color: #a3a5a7;
        position: absolute;
        left: 100%;
        top: 50%;
        width: 40px;
        height: 2px;
      }
      .icon {
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
    .container-title {
      padding-left: 80px;
      color: #fff;

      .title {
        font-family: "Caveat";
        font-size: 2rem;
        line-height: 1;
        font-weight: 700;
        margin-bottom: 5px;
        @media ${devices.laptop} {
          font-size: 1.8rem;
        }
      }
      .text {
        opacity: 0.8;
      }
    }
  }
`;

export const RightSideForm = styled.form`
  display: flex;
  width: 55%;
  padding-right: 60px;
  height: 500px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  @media ${devices.laptopM} {
    padding-right: 0;
  }
  .bar-lateral {
    position: absolute;
    height: 660px;
    right: -200px;
    top: -230px;
    z-index: 10;
    @media ${devices.laptopL} {
      right: -170px;
      top: -100px;
    }
  }
  @media ${devices.laptop} {
    width: 90%;
    padding-right: 0px;
  }
  span {
    color: #29a587;
  }
  label {
    display: block;
    text-indent: 30px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    -webkit-letter-spacing: 0.05em;
    -moz-letter-spacing: 0.05em;
    -ms-letter-spacing: 0.05em;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
    color: white;
  }
  .name,
  .email {
    display: flex;
    flex-direction: column;
    width: 48%;
    @media ${devices.laptop} {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .subject {
    width: 100%;
    @media ${devices.laptop} {
      margin-bottom: 20px;
      z-index: 4;
    }
  }
  .message-area {
    width: 100%;

    textarea {
      position: relative;
      z-index: 4;
      padding: 0 30px;
      display: block;
      resize: none;
      width: 100%;
      height: 140px;
      font-family: "Jost";
      font-size: 16px;
      outline: 0;
      font-weight: 400;
      border-radius: 30px;
      color: #fff;
      background: #1d222a;
      border: 2px solid #a3a5a7;
      transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
      -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
    }
  }

  .send {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    @media ${devices.laptop} {
      flex-direction: column;
    }
    .conditions {
      color: white;
      margin-right: 50px;
      @media ${devices.laptop} {
        margin-right: 0px;
        margin-bottom: 15px;
      }
      @media ${devices.laptopL} {
        margin-right: 22px;
      }
    }
    .btn-send {
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
      @media ${devices.laptopL} {
        width: 40%;
      }
      &:hover {
        background: #29a587;
      }
    }
  }
  .pat {
    position: absolute;
    width: 210px;
    bottom: 20px;
    left: -130px;
    z-index: 1;
    filter: invert(1);
    opacity: 0.3;
    @media ${devices.laptopL} {
      width: 150px;
      bottom: 50px;
      left: -100px;
    }
  }
`;
