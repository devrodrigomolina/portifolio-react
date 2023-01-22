import React from "react";
import LateralBar from "../LateralBar/LateralBar";
import ProgressBar from "../ProgressBar/ProgressBar";
import Titles from "../Titles/Titles";
import * as C from "./style";
import { SkillsJson } from "./SkillsJson";
import BoxAnimation from "../../hooks/useAnimationsScroll";

const Skills = () => {
  return (
    <C.ContainerSkills id="skills">
      <Titles
        title="HABILIDADES PROFISSIONAIS"
        subtitle="MEU"
        secondSubtitle="Talento"
      />
      <div className="habilities">
        <div className="bar">
          <LateralBar />
        </div>

        {SkillsJson.map((skills) => (
          <BoxAnimation>
            <div className="card">
              <div className="title-value">
                <p className="title">{skills.tech}</p>
                <p className="value">
                  {skills.value}
                  <span className="percent">%</span>
                </p>
              </div>
              <p className="description">{skills.description}</p>
              <ProgressBar value={skills.value} />
            </div>
          </BoxAnimation>
        ))}
      </div>
      <h1 className="bg-text">Skills</h1>
    </C.ContainerSkills>
  );
};

export default Skills;
