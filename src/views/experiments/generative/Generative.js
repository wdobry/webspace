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

import "./Generative.css";

export const Generative = () => {
  const todos = [
    { todo: "This item has been done", status: "done" },
    { todo: "This item is in progress", status: "doing" },
    { todo: "This item needs to be done", status: "todo" },
    { todo: "This item needs to be done", status: "todo" },
  ];

  const references = [
    { id: 1, title: "React Spring", url: "http://www.example.com" },
    { id: 2, title: "React Spring", url: "http://www.example.com" },
    { id: 3, title: "React Spring", url: "http://www.example.com" },
    { id: 4, title: "React Spring", url: "http://www.example.com" },
  ];

  return (
    <ExperimentCard>
      <ExperimentTitle>Generative Poster Design</ExperimentTitle>
      <ExperimentInfo>
        This experiment proves a concept for system that requires huge scaling
        and is based on non-user-made content. Graphics created generatively
        should allow for unlimited scaling of such a system on any plane. The
        experiment aims to establish the number of variables needed for a given
        project, so that the system is resistant to the constantly coming new
        content.
      </ExperimentInfo>
      <div className="Experiment" style={{ gridColumn: "span 3" }}>
        <Experiment />
      </div>
      <div>
        <ExperimentStatus todos={todos}>In Progress</ExperimentStatus>
        <ExperimentTodos list={todos} />
        <ExperimentReferences references={references} />
      </div>
      <ExperimentParagraph title="Entry : 1604332013">
        This is only the initial setup of the experiment. Further work should be
        specified.
      </ExperimentParagraph>
    </ExperimentCard>
  );
};

export default Generative;
