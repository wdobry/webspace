import React from "react";
import "./index.css";

export const ExperimentInfo = ({ children }) => (
  <div className="ExperimentInfo">
    <p className="Experiment-heading">Abstract:</p>
    <p>{children}</p>
  </div>
);

export default ExperimentInfo;
