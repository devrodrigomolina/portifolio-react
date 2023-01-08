import React from 'react'
import Cards from '../Cards/Cards'
import Titles from '../Titles/Titles'
import * as C from './style'

const MyServices = () => {
  return (
    <C.ContainerServices>
      <Titles title='OQUE EU FAÇO' subtitle='meus' secondSubtitle='serviços'/>
      <Cards />
      <h1 className="bg-text">Serviços</h1>
    </C.ContainerServices>
  )
}

export default MyServices