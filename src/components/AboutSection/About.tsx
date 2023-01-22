import LateralBar from "../LateralBar/LateralBar";
import * as C from "./style";
import myphoto from "../../assets/minhafoto2.png";
import pat1 from "../../assets/pat1.png";
import pat2 from "../../assets/pat2.png";
import Socias from "../Sociais/Socias";
import { Link } from "react-scroll";
import BoxAnimation from "../../hooks/useAnimationsScroll";
import { useEffect, useState } from "react";
type githubDataType = {
  public_repos: number,
}
const About = () => {
  const [githubData, setGithubData] = useState<any>(null)
  console.log(githubData)
  const githubFetch = async () => {
    const response = await fetch('https://api.github.com/users/devrodrigomolina/repos')
    const responseJson = await response.json()
    setGithubData(responseJson)
  }
  useEffect(() => {
    githubFetch()
  }, [])

  return (
    <C.AboutSection id="home">
      <BoxAnimation>
        <C.AboutContainer>
          <C.LeftSide>
            <LateralBar />
            <div className="infos">
              <h3 className="hello">
                OLÁ, <span>MEU NOME É</span>
              </h3>
              <h1 className="name">
                <span>RODRIGO</span> MOLINA
              </h1>
              <h3 className="iam">
                EU SOU<span className="webdev">Desenvolvedor Front end</span>
              </h3>

              <p className="aboutme">
                Possuo uma vasta experiencia com Desenvolvimento front end, com
                as principais tecnologias do mercado.
              </p>

              <div className="sociais">
                <Socias />
              </div>

              <div className="btns">
                <a
                  href="../../assets/cv.pdf"
                  download
                  target="_blank"
                  className="btn"
                >
                  <span>DOWNLOAD CV</span>
                </a>
                <Link
                  to="skills"
                  className="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  SKILLS
                </Link>
              </div>
            </div>
          </C.LeftSide>

          <C.RigthSide>
            <div className="container-photo">
              <img className="image-pat1" src={pat1} alt="" />
              <img className="myphoto" src={myphoto} alt="" />
              <img className="image-pat2" src={pat1} alt="" />
              <img className="image-pat3" src={pat2} alt="" />
              <div className="infos-git">
                <ul className="git-stats">
                  <li className="stats">
                    <span className="num">
                      {githubData?.length}
                    </span>
                    <span className="value">
                      <span>PROJETOS</span> COMPLETOS
                    </span>
                  </li>
                  <li className="stats">  
                    <span className="num">
                      2 <span>+</span>
                    </span>
                    <span className="value">
                      ANOS DE <span>EXPERIENCIA</span>
                    </span>                  
                  </li>
                </ul>
              </div>
            </div>
          </C.RigthSide>
        </C.AboutContainer>
        <h1 className="bg-text">Desenvolvedor</h1>
      </BoxAnimation>
    </C.AboutSection>
  );
};

export default About;
