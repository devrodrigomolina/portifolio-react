import styled from "styled-components";

export const ContainerSociais = styled.div`
  display: flex;
  color: #fff;
  font-size: 1.5rem;
  justify-content: space-between;
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
`