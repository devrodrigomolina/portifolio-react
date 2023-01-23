import React from "react";
import Cards from "../Cards/Cards";
import Titles from "../Titles/Titles";
import * as C from "./style";
import { ProjectsJson } from "./ProjectsJson";
import LateralBar from "../LateralBar/LateralBar";
import BoxAnimation from "../../hooks/useAnimationsScroll";

const Projects = () => {
  return (
    <C.ContainerProjects id="projects">
      <Titles title="PORTIFÓLIO" subtitle="MEUS" secondSubtitle="Projetos" />
      <BoxAnimation>
        <div className="cards-container">
          {ProjectsJson.map((project) => (
            <Cards
              key={project.projectname}
              image={project.image}
              desc={project.desc}
              projectType={project.projectType}
              projectName={project.projectname}
              height={570}
              arrow_text="Ver projeto"
              link={project.link}
            />
          ))}
        </div>
        <div className="bar-lateral">
          <LateralBar />
        </div>
        <h1 className="bg-text">Portifólio</h1>
      </BoxAnimation>
    </C.ContainerProjects>
  );
};

export default Projects;
