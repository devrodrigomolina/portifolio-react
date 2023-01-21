import BoxAnimation from "../../hooks/useAnimationsScroll";
import LateralBar from "../LateralBar/LateralBar";
import Titles from "../Titles/Titles";
import CoursesAndExperience from "./CoursesAndExperience/CoursesAndExperience";
import { JSONEducation, JSONExperience } from "./DataJSON";
import * as C from "./style";

const Resume = () => {
  return (
    <C.ContainerResume id="resume">
      <Titles title="RESUMO" subtitle="MINHA" secondSubtitle="Historia" />
      <BoxAnimation>
        <C.ContainerHistory>
          <div className="bar">
            <LateralBar />
          </div>
          <C.LeftSide>
            <h1 className="titles">Educação</h1>
            {JSONEducation.map((elements) => (
              <CoursesAndExperience key={elements.id} elements={elements} />
            ))}
          </C.LeftSide>

          <C.RightSide>
            <h1 className="titles">Experiencia</h1>
            {JSONExperience.map((elements) => (
              <CoursesAndExperience key={elements.id} elements={elements} />
            ))}
          </C.RightSide>
        </C.ContainerHistory>
        <h1 className="bg-text">História</h1>
      </BoxAnimation>
    </C.ContainerResume>
  );
};

export default Resume;
