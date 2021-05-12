import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem calc((100vw / 14));
  padding: 4rem 0;
  border-radius: 0.5rem;
  background: ${({ background }) => `hsla(${background}, 1)`};
  color: ${({ foreground }) => `hsla(${foreground}, 1)`};
  *::selection {
    background: ${({ foreground }) => `hsla(${foreground}, 0.2)`};
  }
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
  width: ${({ width = 100 }) => `${width}%`};
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
  margin: 4rem 0 2rem 0;
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
  width: 50%;
`;

export const Column = styled.div`
  position: relative;
  height: 100%;
`;

export const ColumnTitle = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-top: 2.5rem;
  &:first-child {
    margin-top: 0;
  }
`;

export const Row = styled.p`
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 0.5rem;
  font-size: 0.8rem;
  opacity: 0.95;
`;

export const Divider = styled.div`
  position: relative;
  display: block;
  width: 1px;
  height: 6rem;
  background: ${({ foreground, background }) =>
    `linear-gradient(hsl(${foreground}) 0%, hsl(${background}) 100%);`};
  opacity: 0.25;
`;
