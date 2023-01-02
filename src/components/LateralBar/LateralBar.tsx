import React from 'react'
import * as C from './style'
import pat1 from '../../assets/pat1.png'

const LateralBar = () => {

  return (
    <C.ContainerLateralBar>
      <span className='circle'></span>
      <span className='circle'></span>
      <img className='image-pat' src={pat1} alt="" />
    </C.ContainerLateralBar>
  )
}

export default LateralBar