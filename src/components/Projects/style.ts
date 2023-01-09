import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: transparent;
  background-image: linear-gradient(0deg, #31363c 0%, #222831 100%);
  
  .bar-lateral {
    position: absolute;
    height: calc(100% - 300px) ;
    right: 0;
    top: 90px;
    z-index: 10;
    margin-right: 100px;
  }
  .cards-container {
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    .infos-card {
      display: flex;
      flex-direction: column;
      justify-content: none;
      color: white;
      .title {
        font-size: 1rem;
        margin-bottom: 50px;
      }
      .project-type {
        color: #29a587;
      }

      .desc {
        margin: 20px 0;
        font-size: 13px;
      }
    }
  }
  .bg-text {
  font-size: 18vw;
  position: relative;
  bottom: 220px;
  color: rgba(255, 255, 255, 0.02);
  text-align: center;
  font-style: italic;
  font-weight: 100;
  font-family: "Caveat Brush", cursive;
  z-index: 0;
  cursor: default;

}
 
`;
