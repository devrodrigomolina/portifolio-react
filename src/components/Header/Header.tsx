import React from "react";
import { Link } from "react-scroll";
import Menu from "./Menu/Menu";
import * as C from "./style";

const Header = () => {
  return (
    <C.Header>
      <C.Logo>
        <Link to="home" spy={true} smooth={true} offset={-200} duration={1000}>
          <span>&#60;</span> DEV RODRIGO MOLINA <span>/ &#62;</span>
        </Link>
      </C.Logo>
      <C.MenuItens>
        <Menu />
      </C.MenuItens>
    </C.Header>
  );
};

export default Header;
