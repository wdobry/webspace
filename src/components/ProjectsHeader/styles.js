import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 calc((100vw / 14) * 2);
  padding: 1rem calc(100vw / 14);
`;

export const Title = styled.p`
  font-size: 1rem;
  max-width: calc((100vw / 14) * 4.5);
  line-height: 1.6rem;
`;

export const Heading = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  max-width: calc((100vw / 14) * 4.5);
  margin-bottom: 0.5rem;
  line-height: 3.2rem;
`;

export const Paragraph = styled.p`
  display: none;
  line-height: 1.6rem;
  max-width: calc((100vw / 14) * 4);
`;
