import React from 'react'
import * as C from './style'

type ProgressBarTypes = {
  value: number
}

const ProgressBar = ({ value }: ProgressBarTypes) => {

  return (
    <C.ContainerProgressBar value={value}>
      <div className="progress"></div>
      <div className="circle"></div>
    </C.ContainerProgressBar>
  )
}

export default ProgressBar