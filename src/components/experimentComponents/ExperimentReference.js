import React from "react";
import "./index.css";

export const ExperimentReference = ({ children, id }) => (
  <p className="ExperimentReference">
    {children} <sup>[{id}]</sup>
  </p>
);

export default ExperimentReference;
