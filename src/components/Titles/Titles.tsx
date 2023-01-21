import React from 'react'
import BoxAnimation from '../../hooks/useAnimationsScroll'
import * as C from './style'

interface TITLEPROPS {
  title?: string,
  subtitle?: string,
  secondSubtitle?: string
}

const Titles = ({ title, subtitle, secondSubtitle }: TITLEPROPS) => {
  return (
  <BoxAnimation>
    <C.ContainerTitle>
      <h2 className='title'>{title}</h2>
      <div className="container-subtitle">
        <span className='subtitle'>{subtitle} <span className='second-subtitle'>{secondSubtitle}</span></span>
      </div>
    </C.ContainerTitle>
  </BoxAnimation>
  )
}

export default Titles