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
    font-family: 'Caveat Brush', cursive;
    z-index: 1;
  }
`
export const AboutContainer = styled.section`
  max-width: 1500px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
  padding-top: 50px;
  `

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
        color: #29A587;
      } 
    }
    .name {
      font-size: 5rem;
      color: white;
      text-shadow: 3px 3px #000000b3;
      span {
        color: #29A587;
        text-shadow: 3px 3px #000000b3;
      }
    }
    .iam {
      color: white;
      .webdev {
        margin-left: 10px;
        font-family: 'Caveat Brush', cursive;
        font-size: 1.6rem;
        font-weight: 400;
        font-style: italic;
      }
    }
    .aboutme {
      font-size: 1.2rem;
      font-weight: 500;
      margin-right: 150px;
      color: #a3a5a7;
      margin-top: 40px;
    }
    .sociais {
      width: 60px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      color: #fff;
      font-size: 1.5rem;
      .linkedin, .github {
        transition: all .3s;
        cursor: pointer;
        &:hover {
          color: #29A587;
        }
      }
    }
  }
`

export const RigthSide = styled.div`
z-index: 4;
.container-photo {
  width: 700px;
  height: 700px;
  background-color: #29A587;
  border-radius: 50%;
  display: flex;
  align-items: center;
  position: relative;
  .myphoto {
    width:100%;
    border-radius: 50%;
    height: 900px;
    position: absolute;
    top: -210px;
  }
}
`