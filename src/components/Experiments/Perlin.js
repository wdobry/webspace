import React, { useState, useRef } from "react";
import * as G from "components/global";
import { motion } from "framer-motion";

export const Perlin = () => {
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
