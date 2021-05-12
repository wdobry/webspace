import styled from "styled-components";

export const Wrapper = styled.div`
  margin: calc((100vw / 14) * 2);
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 4rem calc(100vw / 14);
`;

export const Title = styled.h1`
  font-size: 1rem;
  max-width: calc((100vw / 14) * 4.5);
  line-height: 1.6rem;
`;

export const Heading = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  max-width: calc((100vw / 14) * 4.5);
  margin-bottom: 0.5rem;
  line-height: 3.2rem;
`;

export const Paragraph = styled.div`
  line-height: 1.6rem;
  max-width: calc((100vw / 14) * 3);
  & u {
    text-decoration-color: hsl(0, 0%, 70%);
    &:hover {
      text-decoration-color: hsl(0, 0%, 20%);
    }
  }
`;
