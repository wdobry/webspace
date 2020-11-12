import React from "react";

export const SketchCard = ({ children }) => (
  <div
    className="lay-grid-col-12 pad-t-6 pad-l-4 pad-r-6 pad-b-6"
    style={{ gridColumn: "span 3" }}
  >
    {children}
  </div>
);

export default SketchCard;
