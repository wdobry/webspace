import styled from "styled-components";
import { motion } from "framer-motion";

const cubeSize = 12;
const mCubeSize = 8;

export const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${cubeSize}rem;
  height: ${cubeSize}rem;
  perspective: 2000px;
  z-index: 10;
  @media (max-width: 768px) {
    width: ${mCubeSize}rem;
    height: ${mCubeSize}rem;
  }
`;

export const WallsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${cubeSize}rem;
  height: ${cubeSize}rem;
  transform-style: preserve-3d;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: ${mCubeSize}rem;
    height: ${mCubeSize}rem;
  }
`;

const Side = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${cubeSize}rem;
  height: ${cubeSize}rem;
  border-radius: 2px;
  background: hsla(0, 0%, 95%, 1);
  border: 1px solid hsla(0, 0%, 75%, 1);
  cursor: pointer;
  box-shadow: inset 0 0 0.5rem 0 hsla(0, 0%, 100%, 1);
  transition: all 0.5s ease-out;
  &:hover {
    background: hsla(var(--c-acc-h), var(--c-acc-s), var(--c-acc-l), 1);
  }
  @media (max-width: 768px) {
    width: ${mCubeSize}rem;
    height: ${mCubeSize}rem;
  }
`;

export const Front = styled(Side)`
  transform: translateZ(${cubeSize / 2}rem);
  @media (max-width: 768px) {
    transform: translateZ(${mCubeSize / 2}rem);
  }
`;

export const Top = styled(Side)`
  transform: rotateX(90deg) translateZ(${cubeSize / 2}rem);
  @media (max-width: 768px) {
    transform: rotateX(90deg) translateZ(${mCubeSize / 2}rem);
  }
`;

export const Right = styled(Side)`
  transform: rotateY(90deg) translateZ(${cubeSize / 2}rem);
  @media (max-width: 768px) {
    transform: rotateY(90deg) translateZ(${mCubeSize / 2}rem);
  }
`;

export const Left = styled(Side)`
  transform: rotateY(-90deg) translateZ(${cubeSize / 2}rem);
  @media (max-width: 768px) {
    transform: rotateY(-90deg) translateZ(${mCubeSize / 2}rem);
  }
`;
export const Bottom = styled(Side)`
  transform: rotateX(-90deg) translateZ(${cubeSize / 2}rem);
  @media (max-width: 768px) {
    transform: rotateX(-90deg) translateZ(${mCubeSize / 2}rem);
  }
`;

export const Back = styled(Side)`
  transform: rotateY(-180deg) translateZ(${cubeSize / 2}rem);
  @media (max-width: 768px) {
    transform: rotateY(-180deg) translateZ(${mCubeSize / 2}rem);
  }
`;

export const CubeLay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  border: 1px dashed hsla(0, 0%, 0%, 0.2);
  padding: 1rem;
  padding-top: 2rem;
  border-radius: 0.5rem;
  transform-origin: left center;
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    right: 0;
    width: calc(100% - 2rem);
    transform: scale(1);
  }
`;
