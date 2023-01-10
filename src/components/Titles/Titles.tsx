import React from 'react'
import * as C from './style'

interface TITLEPROPS {
  title?: string,
  subtitle?: string,
  secondSubtitle?: string
}

const Titles = ({ title, subtitle, secondSubtitle }: TITLEPROPS) => {
  return (
  <C.ContainerTitle>
    <h2 className='title'>{title}</h2>
    <div className="container-subtitle">
      <span className='subtitle'>{subtitle} <span className='second-subtitle'>{secondSubtitle}</span></span>
    </div>
  </C.ContainerTitle>
  )
}

export default Titles