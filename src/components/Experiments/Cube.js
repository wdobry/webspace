import React, { useState, useRef } from "react";
import * as G from "components/global";
import * as S from "./cubeStyles";

export const Cube = () => {
  const constraintsRef = useRef();

  return (
    <>
      <G.LayVertical center style={{ pointerEvents: "all" }}>
        <G.LaySpaceV s={8} />
        <G.LayVertical col={12} background="b-mth">
          <G.LaySpaceV s={4} />
          <G.LayVertical col={12} space={2} reference={constraintsRef}>
            <G.LaySpaceV s={0} />
            <G.TypoH2 text={"f-mth"}>
              Kululululu <G.TypoSup>v 1.0.XD</G.TypoSup>
            </G.TypoH2>
            <G.LayVertical col={3}>
              <G.TypoBody text={"f-mth"} col={2}>
                You can kulać{" "}
                <span style={{ fontFamily: "monospace" }}>[ˈkulaʨ̑]</span> as
                much as you want. Just tap and do{" "}
                <span style={{ fontFamily: "monospace" }}>[kulululu]</span>.
              </G.TypoBody>
            </G.LayVertical>
            <G.LaySpaceV s={2} />
            <Box constraintsRef={constraintsRef} />
            <G.TypoBody text={"f-mth"}></G.TypoBody>
          </G.LayVertical>
          <G.LaySpaceV s={4} />
        </G.LayVertical>
      </G.LayVertical>
    </>
  );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const Box = ({ constraintsRef }) => {
  const [rotation, setRotation] = useState({
    x: getRandomInt(1, 3) * 90,
    y: getRandomInt(1, 3) * 90,
  });

  const handleRandomRotation = (rot) => {
    let rand1 =
      rot.x >= 720 ? getRandomInt(1, 4) * 90 : rot.x + getRandomInt(1, 4) * 90;
    let rand2 =
      rot.y >= 720 ? getRandomInt(1, 4) * 90 : rot.y + getRandomInt(1, 4) * 90;

    setRotation({ x: rand1, y: rand2 });
  };

  return (
    <S.Wrapper onClick={() => handleRandomRotation(rotation)}>
      <S.WallsWrapper
        animate={{
          rotateY: rotation.y,
          rotateX: rotation.x,
        }}
        whileTap={{ scale: 1.35 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <S.Front>1</S.Front>
        <S.Back>2</S.Back>
        <S.Right>3</S.Right>
        <S.Left>4</S.Left>
        <S.Top>5</S.Top>
        <S.Bottom>6</S.Bottom>
      </S.WallsWrapper>
    </S.Wrapper>
  );
};

export default Cube;
