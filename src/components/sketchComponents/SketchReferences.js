import React from "react";

export const SketchReferences = ({ children, references = [], span }) => {
  return (
    <div style={{ gridColumn: `span ${span}` }}>
      <p className="description mar-b-1">References:</p>
      {Object.keys(references).length === 0 && (
        <p className="f-l-1">This project doesn't have any references yet</p>
      )}
      {Object.keys(references).map((item, i) => (
        <p key={i} className="f-l-1 mar-b-1">
          <span>[{item}]</span>{" "}
          <a href={references[item].url}>{references[item].title}</a>
        </p>
      ))}
    </div>
  );
};

export default SketchReferences;
