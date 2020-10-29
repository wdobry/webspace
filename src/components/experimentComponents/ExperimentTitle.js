import React from "react";
import "./index.css";

export const ExperimentTitle = ({ children }) => (
  <div className="ExperimentTitle">
    <p className="Experiment-heading">Experiment:</p>
    <h1>{children}</h1>
  </div>
);

export default ExperimentTitle;
