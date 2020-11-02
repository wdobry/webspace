import React from "react";
import "./index.css";

export const ExperimentParagraph = ({ children, title = "" }) => (
  <div className="ExperimentParagraph">
    <p className="Experiment-heading">{title}</p>
    <p>{children}</p>
  </div>
);

export default ExperimentParagraph;
