import React from "react";
import Cards from "../Cards/Cards";
import Titles from "../Titles/Titles";
import * as C from "./style";
import { ProjectsJson } from "./ProjectsJson";
import LateralBar from "../LateralBar/LateralBar";

const Projects = () => {
  return (
    <C.ContainerProjects>
      <Titles title="PORTIFÓLIO" subtitle="MEUS" secondSubtitle="Projetos" />
      <div className="cards-container">
        {ProjectsJson.map((project) => (
          <Cards
          image={project.image}
          desc={project.desc}
          projectType={project.projectType}
          projectName={project.projectname}
          height={570}
          />
          ))}
      </div>
      <div className="bar-lateral">
        <LateralBar />
      </div>
      <h1 className="bg-text">Portifólio</h1>
    </C.ContainerProjects>
  );
};

export default Projects;
