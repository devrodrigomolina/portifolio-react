import Socias from "../Sociais/Socias";
import * as C from "./style";

const Footer = () => {
  return (
    <C.ContainerFooter>
      <div className="sociais-footer">
        <Socias />
      </div>

      <p className="copyright">
        © 2023 <span>RODRIGO MOLINA</span>. TODOS DIREITOS RESERVADOS
      </p>

      <p className="developer">
        DESENVOLVIDO POR <span>RODRIGO MOLINA</span>
      </p>
    </C.ContainerFooter>
  );
};

export default Footer;
