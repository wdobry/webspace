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
            <G.LaySpaceV s={2} />
            <G.TypoH2 text={"f-mth"}>
              Kululululu <G.TypoSup>1.0.XD</G.TypoSup>
            </G.TypoH2>
            <G.LayVertical col={3}>
              <G.TypoBody text={"f-mth"} col={2}>
                You can kulać{" "}
                <span style={{ fontFamily: "monospace" }}>(/koolatch/)</span> as
                much as you want. Just drag and drop to hear kulululu{" "}
                <span style={{ fontFamily: "monospace" }}>
                  (/koo-loo-loo-loo)
                </span>
                .
              </G.TypoBody>
            </G.LayVertical>
            <G.LaySpaceV s={2} />
            <S.CubeLay>
              <Box constraintsRef={constraintsRef} />
              <G.TypoInfo text={"f-mth"} col={2} center>
                Drag me
              </G.TypoInfo>
            </S.CubeLay>
            <G.LaySpaceV s={3} />
            <G.LayVertical col={4}>
              <G.TypoH3 text={"f-mth"}>What is this?</G.TypoH3>
              <G.LaySpaceV s={1} />
              <G.TypoBody text={"f-mth"} col={2}>
                Kulululu, in Polish, is an onomatopoeia for a rolling object.
                Kulać - means to roll. If the thing rolls for a long time, you
                can always add more{" "}
                <span style={{ fontFamily: "monospace" }}>(loo's)</span> at the
                end.
                <br />
                <br />
                This page is just my exploration of springs with Framer Motion
                library, and testing its limits.
              </G.TypoBody>
            </G.LayVertical>
            <G.LaySpaceV s={2} />
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
    x: getRandomInt(2, 5) * 90,
    y: getRandomInt(2, 5) * 90,
  });

  const [dragXRotation, setDragXRotation] = useState(0);
  const [dragYRotation, setDragYRotation] = useState(0);

  const handleRandomRotation = (rot) => {
    let rand1 =
      rot.x >= 720 ? getRandomInt(1, 3) * 90 : rot.x + getRandomInt(1, 3) * 90;
    let rand2 =
      rot.y >= 720 ? getRandomInt(1, 3) * 90 : rot.y + getRandomInt(1, 3) * 90;

    setRotation({ x: rand1, y: rand2 });
  };

  const handleDragRotation = (info) => {
    const maxAng = 25;

    let calcY = info.velocity.y * -0.15;
    let calcX = info.velocity.x * 0.15;

    if (calcY < maxAng && calcY > -maxAng) {
      setDragYRotation(calcY);
    } else if (calcY > maxAng) {
      setDragYRotation(maxAng);
    } else if (calcY < -maxAng) {
      setDragYRotation(-maxAng);
    }
    //
    if (calcX < maxAng && calcX > -maxAng) {
      setDragXRotation(calcX);
    } else if (calcX > maxAng) {
      setDragXRotation(maxAng);
    } else if (calcX < -maxAng) {
      setDragXRotation(-maxAng);
    }
  };

  return (
    <S.Wrapper
      drag
      dragConstraints={constraintsRef}
      onDrag={(event, info) => handleDragRotation(info)}
      onDragEnd={(event, info) => {
        setDragXRotation(0);
        setDragYRotation(0);
        handleRandomRotation(rotation);
      }}
      dragTransition={{ power: 0.4, timeConstant: 200 }}
    >
      <S.WallsWrapper
        animate={{
          rotateY: dragXRotation,
          rotateX: dragYRotation,
        }}
        whileTap={{ scale: 1.35 }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <S.WallsWrapper
          animate={{
            rotateY: rotation.y,
            rotateX: rotation.x,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        >
          <S.Front>1</S.Front>
          <S.Back>2</S.Back>
          <S.Right>3</S.Right>
          <S.Left>4</S.Left>
          <S.Top>5</S.Top>
          <S.Bottom>6</S.Bottom>
        </S.WallsWrapper>
      </S.WallsWrapper>
    </S.Wrapper>
  );
};

export default Cube;
