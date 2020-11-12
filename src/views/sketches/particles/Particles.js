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

import "./Particles.css";

export const Particles = () => {
  const todos = [
    { todo: "Publish initial exeriment", status: "done" },
    { todo: "Define next steps", status: "doing" },
  ];

  const references = {};

  return (
    <SketchCard>
      <SketchTitle span={4}>Wave Particles</SketchTitle>
      <SketchInfo span={8}>
        This is an sketch to explore possibilites of particles system modified
        by wave functions. The outcome should define the base for Jozek Flakus
        EP cover.
      </SketchInfo>
      <div className="mar-t-2 mar-b-6" style={{ gridColumn: "span 12" }}>
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

export default Particles;
