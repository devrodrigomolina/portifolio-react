import styled from "styled-components";
import { devices } from "../../../styles/Responsive";

type ShowItemsType = {
  showItems: boolean;
};

export const CoursesContainer = styled.div<ShowItemsType>`
  width: 100%;
  position: relative;
  .course {
    transition: all 2s;
    overflow: hidden;
    max-height: ${(props) => (props.showItems ? "500px" : "90px")};
    border-bottom: 2px solid #a3a5a7;

    .name {
      padding: 35px 0;
      padding-left: 25px;
      color: white;
      display: inline-block;
      width: 100%;
      -webkit-transition: all 1s;
      transition: all 1s;
      font-size: 1.2rem;
      font-weight: 700;
      cursor: pointer;
      @media ${devices.mobileM} {
        font-size: 13px;
      }
      @media ${devices.mobileL} {
        font-size: 13px;
      }
    }
    .category-date-course {
      color: white;
      display: flex;
      padding: 5px 25px;
      align-items: center;
      justify-content: space-between;
      @media ${devices.mobileL || devices.mobileS || devices.mobileM} {
        flex-direction: column;
        align-items: flex-start;
      }
      .name-course {
        font-family: "Caveat", cursive;
        font-weight: bold;
        font-size: 1.7rem;
      }
      .date {
        font-weight: bold;
        font-size: 14px;

        @media ${devices.mobileL || devices.mobileS || devices.mobileM} {
          margin-top: 10px;
        }
        .date-end {
          color: #29a587;
        }
      }
    }
    .desc-course {
      color: white;
      opacity: 0.5;
      padding: 25px 25px;
    }

    &::after {
      content: "${(props) => (props.showItems ? "-" : "+")}";
      position: absolute;
      right: -24px;
      bottom: -24px;
      width: 48px;
      height: 48px;
      background: #1d222a;
      line-height: 40px;
      border-radius: 50%;
      color: white;
      border: 2px solid #a3a5a7;
      box-shadow: 5px 5px rgb(0 0 0 / 20%);
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
      -webkit-transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
      z-index: 200;
    }
  }
`;
