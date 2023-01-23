import styled from "styled-components";

type LoadingTypes = {
  loading: boolean
}

export const ContainerLoading = styled.div<LoadingTypes>`
  transition: max-height .7s;
  overflow: hidden;
  position: absolute;
  inset: 0;
  max-height:  ${props => (props.loading ? '100vh' : '0')};
  background-color: #ffffffb7;;
  z-index: 9999;
`

