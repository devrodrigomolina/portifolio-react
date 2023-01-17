import React, { useState } from "react";
import * as C from "./style";

const CoursesAndExperience = ({ elements }: any) => {
  const [showItems, setShowItems] = useState<boolean>(false);

  return (
    <>
      <C.CoursesContainer
        onClick={() => setShowItems((prevState) => !prevState)}
        showItems={showItems}
      >
        <div className="course">
          <span className="name">{elements.name}</span>
          <div className="category-date-course">
            <span className="name-course">{elements.course}</span>
            <span className="date">
              {elements.initialDate} -{" "}
              <span className="date-end">{elements.endDate}</span>
            </span>
          </div>
          <p className="desc-course">{elements.desc}</p>
        </div>
      </C.CoursesContainer>
    </>
  );
};

export default CoursesAndExperience;
