import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  perspective: 2000px;
  z-index: 10;
`;

export const WallsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  transform-style: preserve-3d;
  margin-bottom: 1rem;
`;

const Side = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  border-radius: 2px;
  background: hsla(0, 0%, 95%, 1);
  border: 1px solid hsla(0, 0%, 75%, 1);
  cursor: pointer;
  box-shadow: inset 0 0 0.5rem 0 hsla(0, 0%, 100%, 1);
  transition: all 0.5s ease-out;
  &:hover {
    background: hsla(var(--c-acc-h), var(--c-acc-s), var(--c-acc-l), 1);
  }
`;

export const Front = styled(Side)`
  transform: translateZ(5rem);
`;

export const Top = styled(Side)`
  transform: rotateX(90deg) translateZ(5rem);
`;

export const Right = styled(Side)`
  transform: rotateY(90deg) translateZ(5rem);
`;

export const Left = styled(Side)`
  transform: rotateY(-90deg) translateZ(5rem);
`;
export const Bottom = styled(Side)`
  transform: rotateX(-90deg) translateZ(5rem);
`;

export const Back = styled(Side)`
  transform: rotateY(-180deg) translateZ(5rem);
`;

export const CubeLay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed hsla(0, 0%, 0%, 0.2);
  z-index: 10;
  top: 2rem;
  right: 12rem;
  padding: 1rem;
  padding-top: 2rem;
  border-radius: 0.5rem;
`;
