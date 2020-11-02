import React from "react";
import "./index.css";

export const ExperimentReferences = ({ children, references = [] }) => {
  return (
    <div className="ExperimentReferences">
      <p className="Experiment-heading">References:</p>
      {Object.keys(references).length === 0 && (
        <p>This project doesn't have any references yet</p>
      )}
      {Object.keys(references).map((item) => (
        <div className="ExperimentReferences-reference">
          <p>[{item}]</p>
          <a href={references[item].url}>{references[item].title}</a>
        </div>
      ))}
    </div>
  );
};

export default ExperimentReferences;
