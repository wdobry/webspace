import React, { useState, useRef } from "react";
import * as G from "components/global";
import * as S from "./borderStyles";
import { motion } from "framer-motion";

export const Border = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };
  return (
    <>
      <motion.div
        style={{ pointerEvents: "all" }}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <G.LayVertical center>
          <G.LaySpaceV s={8} />
          <G.LayVertical col={12} background="f-exp">
            <G.LaySpaceV s={4} />
            <G.LayVertical col={12} space={2}>
              <G.LaySpaceV s={0} />
              <G.TypoH2 text={"b-exp"}>
                Absterial <G.TypoSup>UI</G.TypoSup>
                <G.TypoSup> v 1.0</G.TypoSup>
              </G.TypoH2>
              <G.LaySpaceV s={2} />
              <S.Card ref={boxRef}>
                <motion.div
                  style={{ position: "absolute" }}
                  animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                  }}
                  transition={{ type: "spring" }}
                >
                  <S.Cursor></S.Cursor>
                </motion.div>
                <G.LayVertical col={3}>
                  <S.CardContent isFirst>
                    <G.TypoBody text={"b-exp"}>Hover me</G.TypoBody>
                    <motion.div
                      style={{ position: "absolute" }}
                      animate={{
                        x: mousePosition.x,
                        y: mousePosition.revY,
                      }}
                      transition={{ type: "spring" }}
                    >
                      <S.Cursor2></S.Cursor2>
                    </motion.div>
                  </S.CardContent>
                  <S.CardContent isLast>
                    <G.TypoBody text={"b-exp"}>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit...
                    </G.TypoBody>
                    <motion.div
                      style={{ position: "absolute" }}
                      animate={{
                        x: mousePosition.x,
                        y: mousePosition.y,
                      }}
                      transition={{ type: "spring" }}
                    >
                      <S.Cursor2></S.Cursor2>
                    </motion.div>
                  </S.CardContent>
                </G.LayVertical>
              </S.Card>
            </G.LayVertical>
            <G.LaySpaceV s={4} />
          </G.LayVertical>
        </G.LayVertical>
      </motion.div>
    </>
  );
};

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
    revX: (position.x - offset.left) * -1 + offset.width,
    revY: (position.y - offset.top) * -1 + offset.height,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

export default Border;
