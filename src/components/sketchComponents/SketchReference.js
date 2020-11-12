import React from "react";

export const SketchReference = ({ children, id }) => (
  <span>
    {children} <sup className="f-l-s">[{id}]</sup>
  </span>
);

export default SketchReference;
