import React from "react";
import "./index.css";

export const ExperimentTodos = ({ children, list = [] }) => (
  <div className="ExperimentTodos">
    <p className="Experiment-heading">Next Steps:</p>
    {list.map((item) => (
      <div className={`ExperimentTodos-todo ${item.status}`}>
        <p>{item.todo}</p>
      </div>
    ))}
  </div>
);

export default ExperimentTodos;
