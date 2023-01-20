import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import * as C from './style'

const Socias = () => {
  return (
    <C.ContainerSociais>
      <a href="https://www.linkedin.com/in/devrodrigomolina/" target="_blank">
        <BsLinkedin className="linkedin" />
      </a>
      <a href="https://github.com/devrodrigomolina" target="_blank">
        <AiFillGithub className="github" />
      </a>
      <a href="https://wa.me/5544998070146" target="_blank">
        <AiOutlineWhatsApp className="whatsapp" />
      </a>
    </C.ContainerSociais>
  );
};

export default Socias;
