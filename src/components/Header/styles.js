import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem calc((var(--g)) * 2);
  padding: calc(var(--g));
  border-radius: 0.5rem;
  background: var(--c-light);
`;

export const Title = styled.h1`
  font-size: 1rem;
  max-width: calc((var(--g)) * 4.5);
  line-height: 1.6rem;
  margin-bottom: 3.2rem;
`;

export const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  max-width: calc((var(--g)) * 4.5);
  margin-bottom: 0.5rem;
  line-height: 3.2rem;
`;

export const Paragraph = styled.div`
  line-height: 1.6rem;
  max-width: calc((var(--g)) * 3);
  & u {
    text-decoration-color: hsl(0, 0%, 70%);
    &:hover {
      text-decoration-color: hsl(0, 0%, 20%);
    }
  }
`;
