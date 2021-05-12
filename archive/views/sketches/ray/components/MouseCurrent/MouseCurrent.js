import React, { useRef } from "react";

import "./MouseCurrent.css";

const MouseCurrent = ({ x, y }) => {
  const ref = useRef();

  return (
    <div
      className="MouseCurrent-Mouse"
      ref={ref}
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    ></div>
  );
};

export default MouseCurrent;
