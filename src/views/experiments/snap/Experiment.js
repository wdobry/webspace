import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";

import "./Snap.css";

export const Experiment = () => {
  const [ohSnapPosition, setOhSnapPosition] = useSpring(() => ({
    config: { mass: 0.2, tension: 300, friction: 12 },
    left: 0,
    top: 0,

    // width: 0,
    // height: 0,
  }));

  // const { x, y } = useMousePosition();

  // const hasMovedCursor = typeof x === "number" && typeof y === "number";

  const handleMouseEnter = (box) => {
    // USE FOR TOP-LEFT CORNER:
    setOhSnapPosition({
      left: box.current.offsetLeft,
      top: box.current.offsetTop,
    });
    // USE FOR CENTER:
    // setOhSnapPosition({
    //   left: box.current.offsetLeft + box.current.clientWidth / 2,
    //   top: box.current.offsetTop + box.current.clientHeight / 2,
    // });
    // USE FOR COVER:
    // setOhSnapPosition({
    //   left: box.current.offsetLeft,
    //   top: box.current.offsetTop,
    //   width: box.current.clientWidth,
    //   height: box.current.clientHeight,
    // });
  };

  return (
    <div className="Snap-Grid">
      <OhSnap style={ohSnapPosition} />

      {[...Array(24)].map((item, i) => {
        return Math.random() > 0.5 ? (
          <SnapBox
            key={`sbox-${i}`}
            onMouseEnter={handleMouseEnter}
            gridCol={Math.ceil(Math.random() * 2)}
            gridRow={Math.ceil(Math.random() * 2)}
          >
            i{i + 1}
          </SnapBox>
        ) : (
          <Box
            key={`box-${i}`}
            gridCol={Math.ceil(Math.random() * 2)}
            gridRow={Math.ceil(Math.random() * 2)}
          >
            i{i + 1}
          </Box>
        );
      })}
    </div>
  );
};

const SnapBox = ({ children, onMouseEnter, gridCol, gridRow }) => {
  const ref = useRef(null);

  return (
    <div
      className="SnapBox"
      style={{ gridColumn: `span ${gridCol}`, gridRow: `span ${gridRow}` }}
      ref={ref}
      onMouseEnter={() => onMouseEnter(ref)}
    >
      {children}
    </div>
  );
};

const Box = ({ children, gridCol, gridRow }) => {
  return (
    <div
      className="Box"
      style={{ gridColumn: `span ${gridCol}`, gridRow: `span ${gridRow}` }}
    >
      {children}
    </div>
  );
};

const OhSnap = ({ style }) => {
  return <animated.div className="OhSnap" style={style}></animated.div>;
};

export default Experiment;
