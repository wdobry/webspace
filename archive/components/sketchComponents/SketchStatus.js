import React from "react";

export const SketchStatus = ({ children, todos, span }) => {
  const doneArr = todos.filter(function (e) {
    return e.status === "done";
  });

  const progressPercent = (doneArr.length / todos.length) * 100;

  return (
    <div style={{ gridColumn: `span ${span}` }}>
      <p className="description mar-b-1">Status:</p>
      <div>
        <p className="f-b-2 mar-b-1">{children}</p>
        <div
          className="mar-b-3 rad-2"
          style={{
            background: "var(--color-fg-4)",
          }}
        >
          <div
            className="rad-2"
            style={{
              width: `${progressPercent}%`,
              height: "calc(var(--size-01) / 2)",
              background: "var(--color-fg-1)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SketchStatus;
