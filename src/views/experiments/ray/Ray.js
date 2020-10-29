import React from "react";

import {
  ExperimentCard,
  ExperimentInfo,
  ExperimentGoal,
  ExperimentTitle,
  ExperimentStatus,
  ExperimentTodos,
  ExperimentReferences,
} from "components/experimentComponents";

import { Experiment } from "./Experiment";

import "./Ray.css";

export const Ray = () => {
  const todos = [
    { todo: "This item has been done", status: "done" },
    { todo: "This item is in progress", status: "doing" },
    { todo: "This item needs to be done", status: "todo" },
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
      <ExperimentTitle>Ray Tracing on DOM Elements</ExperimentTitle>
      <ExperimentInfo>
        Phasellus dignissim diam nec tortor cursus lacinia. Aliquam erat
        volutpat. In lorem risus, fermentum a pretium consectetur, suscipit vel
        urna. Praesent rutrum purus ut eros sollicitudin pretium. Donec maximus
        nisi eu mollis vehicula. Nulla pellentesque diam sed erat finibus
        facilisis et bibendum nisl.
      </ExperimentInfo>
      <div className="Experiment" style={{ gridColumn: "span 3" }}>
        <Experiment />
      </div>
      <div>
        <ExperimentStatus todos={todos}>In Progress</ExperimentStatus>
        <ExperimentTodos list={todos} />
        <ExperimentReferences references={references} />
      </div>
      <ExperimentGoal>
        In lorem risus, fermentum a pretium consectetur, suscipit vel urna.
        Praesent rutrum purus ut eros sollicitudin pretium. Donec maximus nisi
        eu mollis vehicula. Nulla pellentesque diam sed erat finibus facilisis
        et bibendum nisl.
      </ExperimentGoal>
    </ExperimentCard>
  );
};

export default Ray;
