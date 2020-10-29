import React from "react";
import "./index.css";

export const ExperimentStatus = ({ children, todos }) => {
  const doneArr = todos.filter(function (e) {
    return e.status === "done";
  });

  const progressPercent = (doneArr.length / todos.length) * 100;

  return (
    <div className="ExperimentStatus">
      <p className="Experiment-heading">Status:</p>
      <div className="Experiment-progress-wrapper">
        <p>{children}</p>
        <div className="Experiment-progress-bg">
          <div
            className="Experiment-progress-bar"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentStatus;
