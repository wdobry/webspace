import React, { useRef, useEffect } from "react";
import { animated } from "react-spring";

import "./MousePrevious.css";

const MousePrevious = ({ setFollower, style }) => {
  const ref = useRef(null);

  useEffect(() => {
    setFollower({
      followerX: ref.current.offsetLeft,
      followerY: ref.current.offsetTop,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, style]);

  return (
    <>
      <animated.div
        style={style}
        className={"MousePrevious"}
        ref={ref}
      ></animated.div>
    </>
  );
};

export default MousePrevious;
