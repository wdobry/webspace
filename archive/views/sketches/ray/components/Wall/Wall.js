import React, { useRef, useState, useEffect } from "react";

import "./Wall.css";

const Wall = ({ mouseVector, rotation }) => {
  const { x3, y3, x4, y4 } = mouseVector;
  const [wallPosition, setWallPosition] = useState({
    x1: null,
    y1: null,
    x2: null,
    y2: null,
  });

  const { x1, y1, x2, y2 } = wallPosition;

  const [wallClass, setWallClass] = useState("Wall-Green");
  const [intersectionPoint, setIntersectionPoint] = useState({
    x: null,
    y: null,
  });
  const [intersectionClass, setIntersectionClass] = useState("Wall-SectionNot");

  const checkIntersection = () => {
    const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

    if (denominator === 0) {
      return;
    }

    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

    const px =
      ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
      denominator;

    const py =
      ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
      denominator;

    if (t >= 0 && t <= 1 && u > 0) {
      setWallClass("Wall-Red");
      setIntersectionClass("Wall-Seciton");
      setIntersectionPoint({ x: px, y: py });
    } else {
      setIntersectionClass("Wall-SectionNot");
      setWallClass("Wall-Green");
    }
  };

  const ref = useRef(null);

  useEffect(() => {
    setWallPosition({
      x1: ref.current.offsetLeft,
      y1: ref.current.offsetTop,
      x2: ref.current.offsetLeft,
      y2: ref.current.offsetTop + ref.current.offsetHeight,
    });
  }, [ref]);

  useEffect(() => {
    checkIntersection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x3, y3, x4, y4]);

  return (
    <>
      <div
        className={`Wall-Intersection ${intersectionClass}`}
        style={{ top: intersectionPoint.y, left: intersectionPoint.x }}
      ></div>
      <div
        className={`Wall ${wallClass}`}
        ref={ref}
        style={{ transform: `rotate3d(0, 0, 1, ${rotation}deg)` }}
      ></div>
    </>
  );
};

export default Wall;
