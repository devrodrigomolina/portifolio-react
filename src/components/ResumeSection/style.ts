import styled from "styled-components";

type ShowItemsType = {
  showItems: boolean
}

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
  width: 80vw;
  margin: 0 auto;
`

export const LeftSide = styled.div<ShowItemsType>`
  width: 50%;
  margin-right: 15px;
  position: relative;
  .courses {
    border-bottom: 2px solid #a3a5a7;
    color: white;
    max-height: ${props => (props.showItems ? "500px" : "100px")};
    transition: all 1s;
    overflow: hidden;
    
    .container-instituition {
      width: 100%;
      padding: 40px;
      &::after {
        content: '${props => props.showItems ? '-' : '+'}';
        position: absolute;
        right: -24px;
        
        bottom: -24px;
        width: 48px;
        height: 48px;
        background: #1d222a;
        line-height: 40px;
      border-radius: 50%;
      border: 2px solid #a3a5a7;
      box-shadow: 5px 5px rgb(0 0 0 / 20%);
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
      -webkit-transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
      z-index: 200;
    }
    .name-instituition {
      font-size: 1.2rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
  
  .itens-courses {
    
    padding: 25px;
    transition: all 3s;
    
    .category-date-course {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .name-course {
        font-family: "Caveat", cursive;
        font-weight: bold;
        font-size: 1.7rem;
      }
      .date {
        font-weight: bold;
        .date-end {
          color: #29a587;
        }
      }
    }
    
    .desc-course {
      opacity: 0.5;
      margin-top: 20px;
    }
    
  }
}
`
export const RightSide = styled.div`
  width: 50%;
  margin-left: 15px;
  `