import React from "react";

import {
  ExperimentCard,
  ExperimentInfo,
  ExperimentParagraph,
  ExperimentTitle,
  ExperimentStatus,
  ExperimentTodos,
  ExperimentReferences,
} from "components/experimentComponents";

import { Experiment } from "./Experiment";

import "./Snap.css";

export const Snap = () => {
  const todos = [
    { todo: "Publish initial exeriment", status: "done" },
    { todo: "Define next steps", status: "doing" },
  ];

  const references = {};

  return (
    <ExperimentCard>
      <ExperimentTitle>Snap to DOM Element</ExperimentTitle>
      <ExperimentInfo>
        The initial idea was to create a small React library that would allow to
        pin a single element to any other element. The pinned element should
        manage its own state and the library should provide a hook to create its
        own interactions. This hook should return the function that determines
        the next element to which the component will be pinned.
      </ExperimentInfo>
      <div className="Experiment" style={{ gridColumn: "span 3" }}>
        <Experiment />
      </div>
      <div>
        <ExperimentStatus todos={todos}>In Progress</ExperimentStatus>
        <ExperimentTodos list={todos} />
        <ExperimentReferences references={references} />
      </div>
      <ExperimentParagraph title="Entry : 1604330666">
        This is only the initial setup of the experiment. Further work should be
        specified.
      </ExperimentParagraph>
    </ExperimentCard>
  );
};

export default Snap;
