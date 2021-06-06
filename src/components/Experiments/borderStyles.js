import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-items: stretch;
  flex-direction: column;
  background: hsla(0, 0%, 18%, 1);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1rem 2rem 0 hsla(0, 0%, 0%, 0.2);
  padding: 1px;
`;

export const CardContent = styled.div`
  position: relative;
  width: calc(100% - 1rem);
  padding: 0.5rem 0.5rem;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "0.5rem 0.5rem 0 0" : isLast ? "0 0 0.5rem 0.5rem" : "none"};
  margin-bottom: ${({ isLast }) => (isLast ? "0" : "1px")};
  background: hsla(0, 0%, 16%, 1);
  overflow: hidden;
`;

export const Cursor = styled.div`
  width: 12rem;
  height: 12rem;
  background: hsla(0, 0%, 100%, 0.25);
  border-radius: 50%;
  filter: blur(2rem);
  transform: translateY(-50%) translateX(-50%);
  z-index: -2;
`;

export const Cursor2 = styled.div`
  width: 18rem;
  height: 18rem;
  background: hsla(0, 0%, 100%, 0.15);
  border-radius: 50%;
  filter: blur(8rem);
  transform: translateY(-50%) translateX(-50%);
  z-index: -1;
`;
