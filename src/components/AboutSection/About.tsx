import React from 'react'
import LateralBar from '../LateralBar/LateralBar'
import * as C from './style'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import myphoto from '../../assets/myphoto.png'
const About = () => {
  return (
    <C.AboutSection>
      <C.AboutContainer>
        <C.LeftSide>
          <LateralBar />
          <div className="infos">

          <h3 className='hello'>HELLO, <span>MY NAME IS</span></h3>
          <h1 className='name'><span>RODRIGO</span> MOLINA</h1>
          <h3 className='iam'>I AM <span className='webdev'>Web Developer</span></h3>

          <p className='aboutme'>From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.</p>

          <div className="sociais">
            <BsLinkedin className='linkedin' />
            <AiFillGithub className='github' />
          </div>
          </div>
        </C.LeftSide>

        <C.RigthSide>
          <div className="container-photo">

          <img className='myphoto' src={myphoto} alt="" />
          </div>
        </C.RigthSide>
      </C.AboutContainer>
      <h1 className='bg-text'>Desenvolvedor</h1>
    </C.AboutSection>
  )
}

export default About