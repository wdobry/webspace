import React, { useState } from "react";

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

import "./Generative.css";

export const Generative = () => {
  const todos = [
    { todo: "This item has been done", status: "done" },
    { todo: "This item is in progress", status: "doing" },
    { todo: "This item needs to be done", status: "todo" },
    { todo: "This item needs to be done", status: "todo" },
  ];

  const references = [];
  const [seed, setSeed] = useState(1);

  return (
    <SketchCard>
      <div style={{ gridColumn: "span 4" }}>
        <SketchTitle span={4}>Generative Poster Design</SketchTitle>
        <button className="button-primary" onClick={() => setSeed(seed + 1)}>
          Generate New
        </button>
      </div>
      <SketchInfo span={8}>
        This sketch proves a concept for system that requires huge scaling and
        is based on non-user-made content. Graphics created generatively should
        allow for unlimited scaling of such a system on any plane. The sketch
        aims to establish the number of variables needed for a given project, so
        that the system is resistant to the constantly coming new content.
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
      <SketchParagraph title="Entry : 1604329157" span={8}>
        This is only the initial setup of the sketch. Further work should be
        specified.
      </SketchParagraph>
    </SketchCard>
  );
};

export default Generative;
