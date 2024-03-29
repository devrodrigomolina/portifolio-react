import styled from "styled-components";
import pat2 from "../../assets/pat2.png";
import { devices } from "../../styles/Responsive";

type CardsTypes = {
  height?: number | undefined;
};

export const ContainerCards = styled.div<CardsTypes>`
  width: 400px;
  min-height: ${(props) => (props.height ? props.height : 396)}px;
  background: #1d222a;
  padding: 30px 35px;
  border-radius: 18px;
  position: relative;
  overflow: hidden;
  z-index: 10;
  margin: 20px;
  @media ${devices.laptopL} {
    width: 348px;
  }
  @media ${devices.mobileL} {
    width: 93%;
    padding: 30px 35px;
    margin: 20px 20px 20px 10px;
  }

  .container-image {
    width: 100%;
    height: 250px;
    background-color: #faf1a4;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 30px;
    @media ${devices.mobileL} {
      height: 200px;
    }
    .image {
      width: 100%;
      object-fit: cover;
      box-shadow: 2px 2px 10px black;
      transition: all 0.6s;
      &:hover {
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
      }
    }
  }

  .infos-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    .title {
      font-size: 1rem;
      margin-bottom: 50px;
    }
    .project-type {
      color: #29a587;
      margin-bottom: 5px;
    }
    .subtitle {
      margin-bottom: 10px;
      @media ${devices.laptopL} {
        font-size: 1.6rem;
      }
    }
    .desc {
      text-align: start;
      opacity: 0.8;
      font-size: 1.1rem;
      padding-bottom: 10px;
      @media ${devices.laptopL} {
        font-size: 1rem;
      }
    }
    .arrow {
      height: 22px;
      line-height: 22px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 20px;
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
      cursor: pointer;
      color: white;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
      -webkit-transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);
      &:hover {
        .icon {
          margin-left: 8px;
        }
      }
      .icon {
        margin-left: 13px;
        position: relative;
        left: 0;
        top: 3px;
        font-weight: 900;
        color: #29a587;
        transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
        -webkit-transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
      }
    }
    .image-pat {
      opacity: 0.2;
      filter: invert(1);
      position: absolute;
      right: -24px;
      bottom: -24px;
      width: 141px;
      height: 141px;
      background-image: url(${pat2});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      @media ${devices.mobileM} {
        right: 0;
        bottom: 0;
      }
      @media ${devices.mobileL} {
        right: 0;
        bottom: 0;
      }
      @media ${devices.laptopL} {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export const CardComments = styled.div<CardsTypes>`
  min-height: ${(props) => (props.height ? props.height : 396)}px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .comment-image {
    position: relative;
    .image {
      border-radius: 20px;
    }
  }
  .icon-comment {
    width: 70px;
    height: 70px;
    border-radius: 0px 0px 20px 0px;
    background: #1d222a;
    position: absolute;
    top: 0;
    left: -1px;
    z-index: 10;  
    .icon {
      font-size: 2.5rem;
      color: #29a587;
    }
  }
  .desc {
    color: #aaa;
    font-size: 1.1rem;
  }
  .title-subtitle-comments {
    color: white;
    font-size: 12px;
  }









  .image-pat {
    opacity: 0.5;
    filter: invert(1);
    position: absolute;
    right: -24px;
    bottom: -24px;
    width: 141px;
    height: 141px;
    background-image: url(${pat2});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    @media ${devices.mobileM} {
      right: 0;
      bottom: 0;
    }
    @media ${devices.mobileL} {
      right: 0;
      bottom: 0;
    }
    @media ${devices.laptopL} {
      width: 100px;
      height: 100px;
    }
  }
`;
