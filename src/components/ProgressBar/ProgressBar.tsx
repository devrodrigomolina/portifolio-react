import React from "react";
import BoxAnimation from "../../hooks/useAnimationsScroll";
import * as C from "./style";

type ProgressBarTypes = {
  value: string;
};

const ProgressBar = ({ value }: ProgressBarTypes) => {
  return (
    <BoxAnimation>
      <C.ContainerProgressBar value={value}>
        <div className="progress"></div>
        <div className="circle"></div>
      </C.ContainerProgressBar>
    </BoxAnimation>
  );
};

export default ProgressBar;
