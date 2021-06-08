import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  perspective: 1000px;
`;

export const WallsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  transform-style: preserve-3d;
`;

const Side = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  padding: 2px;
  background: hsla(0, 0%, 100%, 1);
  border: 1px solid hsla(0, 0%, 50%, 0.5);
  cursor: pointer;
  &:hover {
    background: hsla(var(--c-acc-h), var(--c-acc-s), var(--c-acc-l), 1);
  }
`;

export const Front = styled(Side)`
  transform: translateZ(2rem);
`;

export const Top = styled(Side)`
  transform: rotateX(90deg) translateZ(2rem);
`;

export const Right = styled(Side)`
  transform: rotateY(90deg) translateZ(2rem);
`;

export const Left = styled(Side)`
  transform: rotateY(-90deg) translateZ(2rem);
`;
export const Bottom = styled(Side)`
  transform: rotateX(-90deg) translateZ(2rem);
`;

export const Back = styled(Side)`
  transform: rotateY(-180deg) translateZ(2rem);
`;
