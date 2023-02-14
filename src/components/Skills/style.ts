import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerSkills = styled.div`
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
        .value {
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