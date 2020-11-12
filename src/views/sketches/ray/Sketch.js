import React, { useRef, useState, useEffect } from "react";
import { useSpring } from "react-spring";
import Wall from "./components/Wall/Wall";
import MousePrevious from "./components/MousePrevious/MousePrevious";
import MouseCurrent from "./components/MouseCurrent/MouseCurrent";
import useRelativeMousePosition from "hooks/useRelativeMousePosition";

import "./Ray.css";

export const Sketch = () => {
  const ref = useRef(null);

  const [reff, setReff] = useState({ x: null, y: null });

  useEffect(() => {
    setReff(ref.current.getBoundingClientRect());
  }, [ref]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToElement, true);
    return () => {
      window.removeEventListener("scroll", handleScrollToElement, true);
    };
  }, []);

  const handleScrollToElement = (event) => {
    setReff(ref.current.getBoundingClientRect());
  };

  const { x, y } = useRelativeMousePosition(reff);

  const [mouseVector, setMouseVector] = useState({
    x3: null,
    y3: null,
    x4: null,
    y4: null,
  });

  const [follower, setFollower] = useState({
    followerX: null,
    followerY: null,
  });

  const { followerX, followerY } = follower;

  const [propsPrev, setPrev] = useSpring(() => ({
    left: 0,
    top: 0,
  }));

  useEffect(() => {
    setMouseVector({
      x3: followerX,
      y3: followerY,
      x4: x,
      y4: y,
    });
    setPrev({ left: x || 0, top: y || 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, y, followerX, followerY]);

  const lineForward = {
    x: (x - followerX) * 10 + x,
    y: (y - followerY) * 10 + y,
  };

  const lineBackward = {
    x: followerX,
    y: followerY,
  };

  return (
    <div className="Ray-Grid" ref={ref}>
      <svg className="Ray-Connect">
        <g>
          <line
            x1={x}
            y1={y}
            x2={lineForward.x}
            y2={lineForward.y}
            stroke="var(--color-c2-1)"
          />
          <line
            x1={x}
            y1={y}
            x2={lineBackward.x}
            y2={lineBackward.y}
            stroke="var(--color-c2-3)"
          />
        </g>
      </svg>
      <MouseCurrent x={x} y={y} />
      <MousePrevious
        setFollower={setFollower}
        style={propsPrev}
      ></MousePrevious>
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
      <Wall mouseVector={mouseVector} rotation={0} />
    </div>
  );
};

export default Sketch;
