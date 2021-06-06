import React, { useState, useRef } from "react";
import * as G from "components/global";
import { motion } from "framer-motion";

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

export const Perlin = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  return (
    <>
      <G.LayVertical center style={{ pointerEvents: "all" }}>
        <G.LaySpaceV s={8} />
        <motion.div ref={boxRef} onMouseMove={(e) => handleMouseMove(e)}>
          <motion.div
            style={{ position: "absolute", zIndex: 2 }}
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          ></motion.div>
          <G.LayVertical col={12} background="b-mth">
            <G.LaySpaceV s={4} />
            <G.LayVertical col={12} space={2}>
              <G.LaySpaceV s={0} />
              <G.TypoH2 text={"f-mth"}>Siemaaa</G.TypoH2>
              <G.LaySpaceV s={2} />
              <G.TypoBody text={"f-mth"}></G.TypoBody>
            </G.LayVertical>
            <G.LaySpaceV s={4} />
          </G.LayVertical>
        </motion.div>
      </G.LayVertical>
    </>
  );
};

export default Perlin;
