import React, { useState } from "react";
import * as C from './style'
const Menu = () => {
  const [check, setCheck] = useState(false)
  return (
    <C.MenuContainer>
      <C.Label htmlFor="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </C.Label>
    </C.MenuContainer>
  );
};

export default Menu;
