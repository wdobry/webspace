import React from "react";

export const SketchTitle = ({ children, span }) => (
  <div style={{ gridColumn: `span ${span}` }}>
    <p className="description mar-b-1">Sketch:</p>
    <h1 className="f-h-3">{children}</h1>
  </div>
);

export default SketchTitle;
