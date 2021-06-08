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
  &:after {
    width: 3rem;
    height: 3rem;
    background: red;
  }
`;

const Side = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 2px;
  background: hsla(0, 0%, 95%, 1);
  border: 1px solid hsla(0, 0%, 75%, 1);
  cursor: pointer;
  box-shadow: inset 0 0 0.5rem 0 hsla(0, 0%, 100%, 1);
  &:hover {
    background: hsla(var(--c-acc-h), var(--c-acc-s), var(--c-acc-l), 1);
  }
`;

export const Front = styled(Side)`
  transform: translateZ(3rem);
`;

export const Top = styled(Side)`
  transform: rotateX(90deg) translateZ(3rem);
`;

export const Right = styled(Side)`
  transform: rotateY(90deg) translateZ(3rem);
`;

export const Left = styled(Side)`
  transform: rotateY(-90deg) translateZ(3rem);
`;
export const Bottom = styled(Side)`
  transform: rotateX(-90deg) translateZ(3rem);
`;

export const Back = styled(Side)`
  transform: rotateY(-180deg) translateZ(3rem);
`;
