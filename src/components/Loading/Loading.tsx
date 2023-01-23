import * as C from './style'

interface LoadingProps {
  loading: boolean
}

const Loading = ({loading}: LoadingProps) => {
  console.log(loading)
  return (
    <C.ContainerLoading loading={loading}>
      
    </C.ContainerLoading>
  )
}

export default Loading