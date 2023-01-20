import React, { useState } from "react";
import LateralBar from "../../LateralBar/LateralBar";
import * as C from './style'
import { Link } from "react-scroll";
import Socias from "../../Sociais/Socias";

const Menu = () => {
  
  const [check, setCheck] = useState<boolean>(false)
   
  return (
    <C.MenuContainer id="header">
      <C.MenuToggle check={check}>
        <div className="lateral-bar">
          <LateralBar />
        </div>

        <C.MenuNavigation check={check}>
          <Link to='home' spy={true} smooth={true} offset={-200} duration={1000}>HOME</Link>
          <Link to='services' spy={true} smooth={true} offset={-100} duration={1000}>SERVIÇOS</Link>
          <Link to='skills' spy={true} smooth={true} offset={-100} duration={1000}>HABILIDADES</Link>
          <Link to='projects' spy={true} smooth={true} offset={-100} duration={1000}>PORTIFÓLIO</Link>
          <Link to='resume' spy={true} smooth={true} offset={-100} duration={1000}>RESUMO</Link>
          <Link to='testimonials' spy={true} smooth={true} offset={-100} duration={1000}>AVALIAÇÕES</Link>
          <Link to='contact' spy={true} smooth={true} offset={-100} duration={1000}>CONTATO</Link>
          <div className="sociais">
            <Socias />
          </div>
        </C.MenuNavigation>
      </C.MenuToggle>

      <C.Label htmlFor="check">
        <input type="checkbox" id="check" onChange={() => setCheck(!check)}/>
        <span></span>
        <span></span>
        <span></span>
      </C.Label>
     
    </C.MenuContainer>
  );
};

export default Menu;
