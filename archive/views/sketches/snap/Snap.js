import React from "react";

import {
  SketchCard,
  SketchInfo,
  SketchParagraph,
  SketchTitle,
  SketchStatus,
  SketchTodos,
  SketchReferences,
} from "components/sketchComponents";

import { Sketch } from "./Sketch";

import "./Snap.css";

export const Snap = () => {
  const todos = [
    { todo: "Publish initial exeriment", status: "done" },
    { todo: "Define next steps", status: "doing" },
  ];

  const references = {};

  return (
    <SketchCard>
      <SketchTitle span={4}>Snap to DOM Element</SketchTitle>
      <SketchInfo span={8}>
        The initial idea was to create a small React library that would allow to
        pin a single element to any other element. The pinned element should
        manage its own state and the library should provide a hook to create its
        own interactions. This hook should return the function that determines
        the next element to which the component will be pinned.
      </SketchInfo>
      <div className="mar-t-4 mar-b-6" style={{ gridColumn: "span 12" }}>
        <Sketch />
      </div>
      <div style={{ gridColumn: "span 3" }}>
        <SketchStatus todos={todos}>In Progress</SketchStatus>
        <SketchTodos list={todos} />
        <SketchReferences references={references} />
      </div>
      <div style={{ gridColumn: "span 1" }}></div>

      <SketchParagraph title="Entry : 1604330666" span={8}>
        This is only the initial setup of the sketch. Further work should be
        specified.
      </SketchParagraph>
    </SketchCard>
  );
};

export default Snap;
