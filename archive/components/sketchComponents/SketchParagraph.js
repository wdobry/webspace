import React from "react";

export const SketchParagraph = ({ children, title = "", span }) => (
  <div style={{ gridColumn: `span ${span}` }}>
    <p className="description mar-b-1">{title}</p>
    <p className="f-b-2">{children}</p>
  </div>
);

export default SketchParagraph;
