import React from "react";
import "./index.css";

export const ExperimentReferences = ({ children, references = [] }) => (
  <div className="ExperimentReferences">
    <p className="Experiment-heading">References:</p>
    {references.length === 0 && <p>This project doesn't have references yet</p>}
    {references.map((item) => (
      <div className="ExperimentReferences-reference">
        <p>[{item.id}]</p>
        <a href={item.url}>{item.title}</a>
      </div>
    ))}
  </div>
);

export default ExperimentReferences;
