import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem calc((100vw / 14));
  padding: 4rem 0 0 0;
  border-radius: 0.5rem;
  background: ${({ background }) => `hsla(${background}, 1)`};
  color: ${({ foreground }) => `hsla(${foreground}, 1)`};
  *::selection {
    background: ${({ foreground }) => `hsla(${foreground}, 0.2)`};
  }
  overflow: hidden;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  max-width: calc((100vw / 14) * 6);
  margin-bottom: 2rem;
  line-height: 3rem;
`;

export const Date = styled.p`
  font-size: 0.8rem;
  line-height: 1.6rem;
  max-width: calc((100vw / 14) * 3);
  opacity: 0.7;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const Company = styled.p`
  line-height: 1.6rem;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Info = styled.p`
  line-height: 1.6rem;
  max-width: calc((100vw / 14) * 3);
  opacity: 0.7;
  font-size: 0.8rem;
`;

export const Img = styled.img`
  position: relative;
  width: ${({ width = 100 }) => `${width}%`};
  pointer-events: none;
  border-radius: ${({ rad = 0 }) => `${rad}rem`};
`;

export const Intro = styled.p`
  font-size: 1rem;
  max-width: calc((100vw / 14) * 6);
  line-height: 1.6rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  width: calc((100vw / 14) * 6);
  max-width: calc((100vw / 14) * 6);
  margin: 2rem 0 1rem 0;
  line-height: 3rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  width: calc((100vw / 14) * 6);
  max-width: calc((100vw / 14) * 6);
  line-height: 1.6rem;
`;

export const Spacer = styled.div`
  width: 100%;
  height: ${({ s = 4 }) => `${s}rem`};
`;

export const TableWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.div`
  position: relative;
  height: 100%;
`;

export const ImgRow = styled.div`
  position: relative;
  width: ${({ width = 80 }) => `${width}%`};
  display: grid;
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  grid-template-columns: ${({ col = "auto" }) => col};
  grid-auto-flow: column;
`;

export const ImgCol = styled.div`
  position: relative;
  display: grid;
  grid-column-gap: 0.75rem;
  grid-row-gap: 0.75rem;
  grid-auto-flow: row;
`;

export const ALink = styled.a`
  color: inherit;
  text-decoration: underline;
  width: 50%;
  text-align: center;
  background: ${({ color }) => `hsla(${color}, 0.05)`};
  padding: 0.75rem;
  text-decoration-color: hsla(0, 0%, 70%, 1);
  border-radius: 0.5rem;
  pointer-events: all;
  &:hover {
    text-decoration-color: hsla(0, 0%, 20%, 0.5);
  }
`;
