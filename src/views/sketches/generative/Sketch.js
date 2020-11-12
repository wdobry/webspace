import React, { memo } from "react";

import "./Generative.css";

const colors = ["var(--color-fg-2)", "var(--color-fg-3)", "var(--color-fg-4)"];
// const colors = ["#029B58", "#0477F4", "#FE4032", "#FF9CD5"];

const Triangle = () => {
  const fill = colors[Math.ceil(Math.random() * colors.length - 1)];
  const rotate = 90 * Math.ceil(Math.random() * 4 - 1);
  const hasFill = Math.random() < 0.9;
  const pathWidth = 1;
  return (
    <div className="GenTriangle" style={{ transform: `rotateZ(${rotate}deg)` }}>
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        {hasFill ? (
          <path d="M0 0L24 24H0V0Z" fill={fill} />
        ) : (
          <path
            d={`M${0 + pathWidth / 2} ${0 + pathWidth / 2}L${
              24 - pathWidth / 2
            } ${24 - pathWidth / 2}H${0 + pathWidth / 2}V${0 + pathWidth / 2}Z`}
            fill="none"
            stroke={fill}
            strokeWidth={pathWidth}
          />
        )}
      </svg>
    </div>
  );
};
const Rectangle = () => {
  const fill = colors[Math.ceil(Math.random() * colors.length - 1)];
  return (
    <div className="GenRectangle">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M0 0H24V24H0V0Z" fill={fill} />
      </svg>
    </div>
  );
};
const Circle = () => {
  const fill = colors[Math.ceil(Math.random() * colors.length - 1)];

  return (
    <div className="GenCircle">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

const shapes = [<Triangle />, <Rectangle />, <Circle />];
const classes = ["수학", "생물학", "생물학", "물리학"];

export const Sketch = () => {
  const backgroundOrder = Math.ceil(Math.random() * colors.length - 1);
  // const background = colors[backgroundOrder];
  const foreground = colors[backgroundOrder];

  const singleClass = classes[Math.ceil(Math.random() * classes.length - 1)];

  return (
    <div className="Generative">
      <div className="Generative-posters">
        <div className="GenGrid">
          <div className="leftMargin"></div>
          <div className="rightMargin"></div>
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 5" }}>
            <h1 style={{ color: "var(--color-c2-00)" }}>{singleClass}</h1>
          </div>
          <div style={{ gridColumn: "7 / 10", gridRow: "8 / 10" }}>
            <h2 className="f-h-4 pad-l-1 pad-t-3" style={{ color: foreground }}>
              4.7
            </h2>
          </div>

          {[...Array(24)].map((item, i) => {
            const size = Math.ceil(Math.random() * 2);
            return (
              <div
                className="GenBox"
                style={{
                  gridColumn: `span ${size}`,
                  gridRow: `span ${size}`,
                }}
                key={`a${i}`}
              >
                {shapes[Math.ceil(Math.random() * shapes.length - 1)]}
              </div>
            );
          })}
        </div>
        <div className="GenGrid">
          <div className="leftMargin"></div>
          <div className="rightMargin"></div>
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 5" }}>
            <h1 style={{ color: "var(--color-c2-00)" }}>{singleClass}</h1>
          </div>
          <div style={{ gridColumn: "7 / 10", gridRow: "8 / 10" }}>
            <h2 className="f-h-4 pad-l-1 pad-t-3" style={{ color: foreground }}>
              4.7
            </h2>
          </div>

          {[...Array(24)].map((item, i) => {
            const size = Math.ceil(Math.random() * 2);
            return (
              <div
                className="GenBox"
                style={{
                  gridColumn: `span ${size}`,
                  gridRow: `span ${size}`,
                }}
                key={`b${i}`}
              >
                {shapes[Math.ceil(Math.random() * shapes.length - 1)]}
              </div>
            );
          })}
        </div>
        <div className="GenGrid">
          <div className="leftMargin"></div>
          <div className="rightMargin"></div>
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 5" }}>
            <h1 style={{ color: "var(--color-c2-00)" }}>{singleClass}</h1>
          </div>
          <div style={{ gridColumn: "7 / 10", gridRow: "8 / 10" }}>
            <h2 className="f-h-4 pad-l-1 pad-t-3" style={{ color: foreground }}>
              4.7
            </h2>
          </div>

          {[...Array(24)].map((item, i) => {
            const size = Math.ceil(Math.random() * 2);
            return (
              <div
                className="GenBox"
                style={{
                  gridColumn: `span ${size}`,
                  gridRow: `span ${size}`,
                }}
                key={`c${i}`}
              >
                {shapes[Math.ceil(Math.random() * shapes.length - 1)]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Sketch);
