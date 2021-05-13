import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ background = "0, 0%,100%" }) => `hsla(${background}, 0)`};
  color: ${({ foreground }) => `hsla(${foreground}, 1)`};
  *::selection {
    background: ${({ foreground }) => `hsla(${foreground}, 0.2)`};
  }
`;

export const NameWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  padding: 0.2rem 1.25rem 0.2rem 0.2rem;
  box-shadow: 0 0.5rem 1rem -0.35rem hsla(0, 0%, 0%, 0.15);
  border: 1px solid hsla(0, 0%, 0%, 0.05);
  background: hsla(0, 0%, 99%, 0.5);
  backdrop-filter: blur(1rem);
  z-index: 1;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.25s ease;
  &:hover {
    transform: scale(0.9);
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 2rem;
  margin-right: 0.5rem;
  border-radius: 2rem;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
`;

export const Name = styled.div`
  display: block;
  color: hsla(0, 0%, 0%, 0.7);
  font-weight: 500;
  text-shadow: 1px 1px 1px hsla(0, 0%, 100%, 0.4);
  font-size: 0.9rem;
`;

export const InfoWrapper = styled.div`
  position: fixed;
  display: flex;
  font-size: 0.8rem;
  z-index: -1;
  left: 16rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

export const InfoFirst = styled.div`
  display: block;
  margin: 0.25rem 0;
`;

export const InfoSecond = styled.div`
  display: block;
  font-weight: 500;
`;

export const LinksWrapper = styled.div`
  position: fixed;
  right: 12rem;
  display: flex;
`;

export const Link = styled.a`
  display: block;
  font-size: 0.9rem;
  margin-left: 2rem;
  transition: all 0.15s ease;
  cursor: pointer;
  opacity: 1;
  &:hover {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  position: fixed;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1rem;
  /*  */
  border-radius: 2rem;
  box-shadow: 0 0.5rem 1rem -0.35rem hsla(0, 0%, 0%, 0.15);
  border: 1px solid hsla(0, 0%, 0%, 0.05);
  backdrop-filter: blur(1rem);
  /*  */
  color: hsla(0, 0%, 0%, 0.7);
  background: hsla(0, 0%, 99%, 0.5);
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 1px 1px 1px hsla(0, 0%, 100%, 0.4);
  /*  */
  outline: none;
  border: none;
  z-index: 1;
  transform: scale(1);
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
`;