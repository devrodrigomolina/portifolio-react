import * as C from "./style";
import { FaArrowRight } from "react-icons/fa";
import { CardsType } from "../../types/CardsTypes";
import BoxAnimation from "../../hooks/useAnimationsScroll";

const Cards = ({
  image,
  projectName,
  projectType,
  title,
  subtitle,
  desc,
  height,
}: CardsType) => {
  return (
    <BoxAnimation>
      <C.ContainerCards height={height}>
        <div className="infos-card">
          {image && (
            <div className="container-image">
              <img className="image" src={image} />
            </div>
          )}
          {projectType && <h3 className="project-type">{projectType}</h3>}
          {projectName && <h2 className="project-name">{projectName}</h2>}
          {title && subtitle && (
            <>
              <h3 className="title">{title}</h3>
              <h1 className="subtitle">{subtitle}</h1>
            </>
          )}
          <p className="desc">{desc}</p>
          <a href="#" className="arrow">
            Ver projeto <FaArrowRight className="icon" />
          </a>
          <div className="image-pat" />
        </div>
      </C.ContainerCards>
    </BoxAnimation>
  );
};

export default Cards;
