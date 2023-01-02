import React from 'react'
import Menu from './Menu/Menu'
import * as C from './style'

const Header = () => {
  return (
    <C.Header>
      <C.Logo>
        <h2><span>&#60;</span> DEV RODRIGO MOLINA <span>/ &#62;</span></h2>
      </C.Logo>
      <C.MenuItens>
        <Menu />
      </C.MenuItens>
    </C.Header>
  )
}

export default Header