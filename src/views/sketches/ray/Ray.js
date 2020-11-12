import React from "react";

import {
  SketchCard,
  SketchInfo,
  SketchParagraph,
  SketchTitle,
  SketchStatus,
  SketchTodos,
  SketchReferences,
  SketchReference,
} from "components/sketchComponents";

import { Sketch } from "./Sketch";

import "./Ray.css";

export const Ray = () => {
  const todos = [
    {
      todo:
        "Proof of concept - line-line intersection (between pointer vector and given element.",
      status: "done",
    },
    {
      todo:
        "Fix useRelativeMousePosition hook to take scroll position into account.",
      status: "todo",
    },
    {
      todo: "Test on Pointer Lock API with regular division elements.",
      status: "todo",
    },
    { todo: "Snap pointer to closest division element.", status: "todo" },
    {
      todo: "Create testing environment and test on real examples.",
      status: "todo",
    },
    {
      todo:
        "Publish project on NPM that allows tests with two simple wrappers.",
      status: "todo",
    },
  ];

  const references = {
    1: { title: "React Spring", url: "https://www.react-spring.io/" },
    2: {
      title: "Line-line intersection",
      url: "https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection",
    },
  };

  return (
    <SketchCard>
      <SketchTitle span={4}>Predict Pointer Position and Snap It</SketchTitle>
      <SketchInfo span={8}>
        This sketch is intended to test the hypothesis that attracting the
        cursor to the interactive elements of an HTML document alone will make
        it easier to navigate the document. To see the future path of the cursor
        I use its vector created from the actual point on which the cursor is
        located, and the point attached to it with a{" "}
        <SketchReference id="1">spring</SketchReference>. Each interactive
        element is given two lines on theirs diagonals.{" "}
        <SketchReference id="2">Line-line intersection</SketchReference>{" "}
        (between pointer vector and interactive element diagonals) is used to
        determine the closet interactive element.
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
        The first step in this sketch was to create a working interaction to
        detect the point of intersection between the cursor vector and any
        interface element. To visualize the interaction itself I used SVG and
        DOM models. SVG is used to draw points forming the vector, the vector
        itself, the radius coming out of the vector and the intersection point
        with the element itself.
      </SketchParagraph>
    </SketchCard>
  );
};

export default Ray;
