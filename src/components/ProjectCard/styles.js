import styled from "styled-components";

export const Hero = styled.img`
  position: absolute;
  top: 3rem;
  left: 45%;
  height: calc((100vw / 14) * 4.75);
  opacity: 0.9;
  pointer-events: none;
  transition: all 0.35s ease;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 3rem calc((100vw / 14) * 3 - 2rem);
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ background }) => `hsla(${background}, 1)`};
  color: ${({ foreground }) => `hsla(${foreground}, 1)`};
  *::selection {
    background: ${({ foreground }) => `hsla(${foreground}, 0.2)`};
  }
  overflow: hidden;
  &:hover ${Hero} {
    opacity: 1;
    /* height: calc((100vw / 14) * 3.5); */
    /* left: 40%; */
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  max-width: calc((100vw / 14) * 4.5);
  line-height: 1.6rem;
`;

export const Heading = styled.h3`
  font-size: 2.2rem;
  font-weight: 600;
  max-width: calc((100vw / 14) * 4);
  margin-bottom: 5rem;
  line-height: 3rem;
`;

export const Domain = styled.p`
  font-size: 0.8rem;
  line-height: 1.6rem;
  max-width: calc((100vw / 14) * 3);
  opacity: 0.7;
  margin-top: 1.5rem;
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
