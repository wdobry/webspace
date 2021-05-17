import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem calc((var(--g) * 1)) 6rem;
  padding: 0 calc(var(--g) * 2 - 2rem);
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.55rem;
  max-width: calc((var(--g)) * 4.5);
  line-height: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Heading = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  max-width: calc((var(--g)) * 4.5);
  line-height: 3.2rem;
`;

export const Paragraph = styled.div`
  line-height: 1.6rem;
  max-width: calc((var(--g)) * 5);
  opacity: 0.8;
  & u {
    text-decoration-color: hsl(0, 0%, 70%);
    &:hover {
      text-decoration-color: hsl(0, 0%, 20%);
    }
  }
`;

export const Upper = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  font-weight: 700;
  transform: translateY(-0.75rem);
  line-height: 3.2rem;
  margin: 0;
  padding: 0;
  margin-bottom: -1rem;
`;

export const CLink = styled.a`
  color: inherit;
  background: hsla(0, 0%, 90%, 1);
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  &:hover {
    opacity: 0.7;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: ${({ s = 4 }) => `${s}rem`};
`;

export const LinksWrapper = styled.div`
  display: flex;
  max-width: 35%;
`;
