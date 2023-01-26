import React, { useState } from "react";
import LateralBar from "../../LateralBar/LateralBar";
import * as C from "./style";
import { Link } from "react-scroll";
import Socias from "../../Sociais/Socias";

const Menu = () => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <C.MenuContainer id="header">
      <C.MenuToggle check={check}>
        <div className="lateral-bar">
          <LateralBar />
        </div>

        <C.MenuNavigation check={check}>
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}
            onClick={() => setCheck(false)}
          >
            HOME
          </Link>
          <Link
            to="services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setCheck(false)}
          >
            SERVIÇOS
          </Link>
          <Link
            to="skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setCheck(false)}
          >
            HABILIDADES
          </Link>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setCheck(false)}
          >
            PORTIFÓLIO
          </Link>
          <Link
            to="resume"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setCheck(false)}
          >
            RESUMO
          </Link>
{/*           <div className="testimonials-container">
            <Link
              to="testimonials"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              onClick={() => setCheck(false)}
              className="testimonials"
            >
              AVALIAÇÕES
            </Link>
            <span className="inDev">(em desenvolvimento)</span>
          </div> */}
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={() => setCheck(false)}
          >
            CONTATO
          </Link>
          <div className="sociais">
            <Socias />
          </div>
        </C.MenuNavigation>
      </C.MenuToggle>

      <C.Label htmlFor="check">
        <input type="checkbox" id="check" onChange={() => setCheck(!check)} />
        <span></span>
        <span></span>
        <span></span>
      </C.Label>
    </C.MenuContainer>
  );
};

export default Menu;
