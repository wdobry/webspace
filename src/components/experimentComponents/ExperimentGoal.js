import React from "react";
import "./index.css";

export const ExperimentGoal = ({ children }) => (
  <div className="ExperimentGoal">
    <p className="Experiment-heading">About:</p>
    <p>{children}</p>
  </div>
);

export default ExperimentGoal;
