import React from 'react'
import LateralBar from '../LateralBar/LateralBar'
import * as C from './style'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import myphoto from '../../assets/EU8.png'
import pat1 from '../../assets/pat1.png'
import pat2 from '../../assets/pat2.png'

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

          <p className='aboutme'>Possuo uma vasta experiencia com Desenvolvimento front end, com as principais tecnologias do mercado.</p>

          <div className="sociais">
            <a href="https://www.linkedin.com/in/devrodrigomolina/" target="_blank">
              <BsLinkedin className='linkedin' />
            </a>
            <a href="">
              <AiFillGithub className='github' />
            </a>
            <a href="">
              <AiOutlineWhatsApp className='whatsapp' />
            </a>
          </div>
          <div className="btns">
            <a href="#" className='btn'>
              <span>DOWNLOAD CV</span>
            </a>
            <a href="" className='skills'>SKILLS</a>
          </div>
          </div>
        </C.LeftSide>

        <C.RigthSide>
          <div className="container-photo">
            <img className='image-pat1' src={pat1} alt="" />
            <img className='myphoto' src={myphoto} alt="" />
            <img className='image-pat2' src={pat1} alt="" />
            <img className='image-pat3' src={pat2} alt="" />
          </div>
  
        </C.RigthSide>
      </C.AboutContainer>
      <h1 className='bg-text'>Desenvolvedor</h1>
    </C.AboutSection>
  )
}

export default About