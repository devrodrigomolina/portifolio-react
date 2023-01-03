import styled from "styled-components";

export const AboutSection = styled.section`
  background-color: transparent;
  background-image: linear-gradient(0deg, #31363c 0%, #222831 100%);
  .bg-text {
    font-size: 20rem;
    position: relative;
    bottom: 460px;
    color: #31363cba;
    text-align: center;
    font-style: italic;
    font-weight: 100;
    font-family: "Caveat Brush", cursive;
    z-index: 1;
  }
`;
export const AboutContainer = styled.section`
  max-width: 1500px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  padding-top: 50px;
`;

export const LeftSide = styled.div`
  height: 620px;
  z-index: 2;
  display: flex;
  .infos {
    margin: 100px 0 0 100px;
    width: 740px;
    .hello {
      color: white;
      span {
        color: #29a587;
      }
    }
    .name {
      font-size: 5rem;
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
    }
    .sociais {
      margin-top: 40px;
      display: flex;
      color: #fff;
      font-size: 1.5rem;
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
          content: '';
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
  .container-photo {
    width: 700px;
    height: 700px;
    background-color: #29a587;
    border-radius: 50%;
    display: flex;
    align-items: center;
    position: relative;
    .myphoto {
      width: 100%;
      border-bottom-left-radius: 47%;
      border-bottom-right-radius: 47%;
      height: 830px;
      position: absolute;
      top: -115px;
      /* transform: rotate(); */
    }
    .image-pat1, .image-pat2, .image-pat3 {
      opacity: 0.6;
      filter: invert(1);
      position: absolute;
      z-index: -1;
    }
    .image-pat1 {
      width: 200px;
      bottom: 60px;
      left: -100px;
    }
    .image-pat2 {
      width: 220px;
      top: -100px;
      right: 100px;
    }
    .image-pat3 {
      width: 150px;
      bottom: 60px;
      right: -50px;
    }

  }
 
`;
