import React from "react";

export const SketchInfo = ({ children, span }) => (
  <div className="span-dc-2" style={{ gridColumn: `span ${span}` }}>
    <p className="description mar-b-1">Abstract:</p>
    <p className="f-b-2">{children}</p>
  </div>
);

export default SketchInfo;
