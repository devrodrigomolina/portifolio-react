import styled from "styled-components";

export const ContainerSkills = styled.div`
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
  .habilities {
    max-width: 85vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    margin: 0 auto;
    position: relative;
    .bar {
      position: absolute;
      height: calc(100% + 150px);
      left: 0;
    }
    .card {
      max-width: 450px;
      min-height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     
      padding: 20px;
      .title-value {
        display: flex;
        font-size: 1.2rem;
        justify-content: space-between;
        margin-bottom: 15px;
        color: white;
        font-weight: bold;
        .percent {
          color: #29a587;
        }
      }
      .description {
       /*  margin: 20px 0; */
        color: white;
        opacity: 0.8;
      }
    }
  }
`