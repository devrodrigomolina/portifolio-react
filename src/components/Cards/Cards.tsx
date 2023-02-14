import * as C from "./style";
import { FaArrowRight } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
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
  arrow_text,
  link,
  type,
}: CardsType) => {
  return (
    <BoxAnimation>
      <C.ContainerCards height={height}>
        {type !== "card-comments" ? (
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

            <a href={link} className="arrow" target="_blank">
              {arrow_text} <FaArrowRight className="icon" />
            </a>

            <div className="image-pat" />
          </div>
        ) : (
          <C.CardComments height={height}>
            {image && (
              <div className="comment-image">
                <div className="icon-comment">
                  <RiDoubleQuotesR className="icon" />
                </div>
                <img className="image" src={image} />
              </div>
            )}
            <p className="desc">{desc}</p>
            {projectType && <h3 className="project-type">{projectType}</h3>}
            {projectName && <h2 className="project-name">{projectName}</h2>}
            {title && subtitle && (
              <div className="title-subtitle-comments">
                <h1 className="subtitle">{subtitle}</h1>
                <h3 className="title">{title}</h3>
              </div>
            )}

            <div className="image-pat" />
          </C.CardComments>
        )}
      </C.ContainerCards>
    </BoxAnimation>
  );
};

export default Cards;
