import styled from "styled-components";

const columns = (x) => {
  return `calc((100vw / 14) * ${x} * 1)`;
};

const color = (color, opacity = 1) => {
  return `hsla(var(--c-${color}-h), var(--c-${color}-s), var(--c-${color}-l), ${opacity})`;
};

const debugColor = "hsla(0, 100%, 80%, 0.2)";
const debugWidth = "hsla(0, 100%, 80%, 0.2)";
// const debugSpace = "hsla(0, 100%, 80%, 0.2)";
const debugLight = "hsla(0, 100%, 80%, 0.4)";
// const debugNone = "hsla(0, 100%, 80%, 0)";

const wireframe = `
  text-decoration: line-through;
  text-decoration-color: ${({ text = "fgd" }) => color(text, 0.8)};
  text-decoration-style: line;
  text-decoration-thickness: 0.75em;
  text-decoration-skip: objects spaces;
`;

const mobileQueries = "max-width: 768px";

const debugerTransition = "transition: none";

export const UtilityText = styled.p`
  font-size: 0.85rem;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

export const LaySpaceV = styled.div`
  position: relative;
  display: block;
  height: ${({ s = 4 }) => `${s}rem`};
  @media (${mobileQueries}) {
    height: ${({ ms = 2 }) => `${ms}rem`};
  }
  ${({ debugAll }) =>
    debugAll &&
    `width: 100%;
   background: ${debugLight};
   border-radius: none;
  `}
  ${debugerTransition};

  ::after {
    display: ${({ debugAll }) => (debugAll ? "block" : "none")};
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    content: ${({ s }) => `"R: ${s}"`};
    font-size: 0.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: red;
    line-height: 0.5rem;
  }
`;

export const LaySpaceH = styled.div`
  position: relative;
  display: block;
  width: ${({ s = 4 }) => `${s}rem`};
  min-width: ${({ s = 4 }) => `${s}rem`};
  @media (${mobileQueries}) {
    width: ${({ ms = 2 }) => `${ms}rem`};
    min-width: ${({ ms = 2 }) => `${ms}rem`};
  }
  ${({ debugAll }) =>
    debugAll &&
    `
   align-self: stretch;
   background: ${debugWidth};
   border-radius: none;
  `}
  ${debugerTransition};
  ::after {
    display: ${({ debugAll }) => (debugAll ? "block" : "none")};
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    content: ${({ s }) => `"R: ${s}"`};
    font-size: 0.5rem;
    font-weight: 500;
    text-transform: uppercase;
    color: red;
    line-height: 0.5rem;
  }
`;

export const Layout = styled.div`
  position: ${({ fixed = false }) => (fixed ? "fixed" : "relative")};
  display: flex;
  flex-direction: ${({ horizontal = false }) =>
    horizontal ? "row" : "column"};
  align-items: ${({ center = false }) => (center ? "center" : "flex-start")};
  justify-content: ${({ noSpread = false }) =>
    noSpread ? "flex-start" : "space-between"};
  width: ${({ col = 14, space = 0, auto = false }) =>
    auto ? "auto" : columns(col - space * 2)};
  padding: ${({ space = 0 }) => `0 ${columns(space)}`};
  background: ${({ background }) =>
    background ? color(background, 1) : "none"};
  border-radius: ${({ rad = true, debugAll }) =>
    debugAll ? 0 : rad ? "0.5rem" : 0};
  outline: ${({ debugAll }) =>
    debugAll
      ? "1px solid hsla(0,100%,50%,0.5)"
      : "1px solid hsla(0,100%,50%,0)"};
  color: ${({ text = "fgd" }) => color(text, 1)};
  height: ${({ height = "auto" }) =>
    height === "auto" ? "auto" : `${height}rem`};
  & * ::selection {
    color: inherit;
    background: ${color("acc", 1)};
  }
  box-shadow: ${({ space = 0, debugAll }) =>
    debugAll
      ? `inset ${columns(space)} 0 0 0 ${debugColor},
     inset ${columns(-space)} 0 0 0 ${debugColor}
    `
      : `inset ${columns(space)} 0 0 0 hsla(0,0%,0%,0),
     inset ${columns(-space)} 0 0 0 hsla(0,0%,0%,0)
    `};
  outline-offset: 0;
  z-index: ${({ z = 0 }) => z};
  pointer-events: ${({ events = true }) => (events ? "all" : "none")};
  ${debugerTransition};
  @media (${mobileQueries}) {
    display: ${({ mNone }) => (mNone ? "none" : "flex")};
    flex-direction: ${({ mHorizontal = false }) =>
      mHorizontal ? "row" : "column"};
    width: ${({ mCol = 14, mSpace = 0, auto = false }) =>
      auto ? "auto" : columns(mCol - mSpace * 2)};
    height: ${({ mHeight = "auto" }) =>
      mHeight === "auto" ? "auto" : `${mHeight}rem`};
    padding: ${({ mSpace = 0 }) => `0 ${columns(mSpace)}`};
    align-items: ${({ mCenter = false }) =>
      mCenter ? "center" : "flex-start"};
  }
`;

export const TypoH1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3.2rem;
  width: 100%;
  max-width: ${columns(6)};
  color: ${({ text = "fgd" }) => color(text, 1)};
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
  white-space: pre-wrap;
  width: 100%;
  /* ${({ debugAll }) => debugAll && wireframe} */
  @media (${mobileQueries}) {
    max-width: ${columns(14)};
  }
`;
export const TypoH2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  width: 100%;
  max-width: ${columns(6)};
  color: ${({ text = "fgd" }) => color(text, 1)};
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
  white-space: pre-wrap;
  width: 100%;
  /* ${({ debugAll }) => debugAll && wireframe} */
  @media (${mobileQueries}) {
    max-width: ${columns(14)};
  }
`;
export const TypoH3 = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.2rem;
  width: 100%;
  max-width: ${columns(6)};
  color: ${({ text = "fgd" }) => color(text, 1)};
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
  white-space: pre-wrap;
  width: 100%;
  /* ${({ debugAll }) => debugAll && wireframe} */
  @media (${mobileQueries}) {
    max-width: ${columns(14)};
  }
`;

export const TypoBody = styled.div`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6rem;
  width: 100%;
  max-width: ${columns(6)};
  color: ${({ text = "fgd" }) => color(text, 1)};
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
  white-space: pre-wrap;
  width: 100%;
  /* ${({ debugAll }) => debugAll && wireframe} */
  @media (${mobileQueries}) {
    max-width: ${columns(14)};
  }
`;

export const TypoSup = styled.span`
  display: inline-block;
  font-size: 50%;
  font-weight: inherit;
  transform: translateY(-0.75em);
  line-height: 0;
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
`;

export const TypoSub = styled.span`
  display: inline-block;
  font-size: 50%;
  font-weight: inherit;
  transform: translateY(0.25em);
  line-height: 0;
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
`;

export const InlineLink = styled.a`
  display: inline-block;
  color: inherit;
  padding: 0.4rem 0.6rem;
  margin: -0.4rem -0.6rem;
  font-size: inherit;
  font-weight: inherit;
  text-decoration: underline;
  text-decoration-color: ${color("fgd", 0.4)};
  opacity: 1;
  transform: scale(1);
  cursor: pointer;
  transition: all 0.15s ease;
  border-radius: 0.25rem;
  z-index: 1;
  color: ${({ text = "fgd" }) => color(text, 1)};
  ::after {
    position: absolute;
    top: ${({ simple = false }) => (simple ? "0.15rem" : "0")};
    right: ${({ simple = false }) => (simple ? "-0.25rem" : "0")};
    content: "↗";
    color: ${({ text = "fgd" }) => color(text, 0.8)};
    font-weight: ${({ simple = false }) => (simple ? 700 : 400)};
    padding: ${({ simple = false }) => (simple ? "0.15rem" : "0")};
    margin: ${({ simple = false }) => (simple ? "-0.15rem" : "0")};
    border-radius: ${({ simple = false }) => (simple ? "1rem" : "0")};
    font-size: 0.75em;
    line-height: 0.75em;
    text-align: center;
    transform-origin: bottom left;
    transform: scale(0.15) translateX(-0.4em) translateY(0.3em) rotate(8deg);
    opacity: 0;
    transition: transform 0.15s ease-out 0.05s, opacity 0.15s ease-in 0.05s;
  }
  &:hover {
    background: ${({ simple = false }) => (simple ? "none" : color("can", 1))};
    text-decoration-color: ${color("fgd", 0)};
    transform: ${({ simple = false }) => (simple ? "scale(1)" : `scale(1.05)`)};
    box-shadow: ${({ simple = false }) =>
      simple ? "none" : `0 0.25em 0.75em -0.2em ${color("fgd", 0.4)}`};
    ::after {
      transform: scale(1) translateX(-0.2em) translateY(0.15em) rotate(8deg);
      opacity: 1;
    }
  }
  &:active {
    transform: scale(0.8);
    ::after {
      transition: all 0.1s ease-in;
      opacity: 0;
    }
  }
  ::selection {
    color: inherit;
    text-decoration-color: ${color("fgd", 0)};
    background: none;
  }
  pointer-events: all;
`;

export const ALink = styled.a`
  display: block;
  color: inherit;
  font-size: 0.9rem;
  padding: 0.6rem;
  margin: -0.6rem;
  font-weight: 500;
  opacity: 1;
  transform: scale(1);
  cursor: pointer;
  transition: all 0.15s ease;
  border-radius: 1rem;
  &:hover {
    background: ${color("bgd", 1)};
    text-decoration-color: ${color("fgd", 0.6)};
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.8);
  }
  ::selection {
    color: inherit;
    background: none;
  }
  pointer-events: all;
`;

export const TypoInfo = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.6rem;
  font-weight: ${({ bold = false }) => (bold ? 500 : 400)};
  color: ${({ bold = false, text = "fgd" }) =>
    bold ? color(text, 0.8) : color(text, 0.6)};
  &:last-of-type {
    margin-bottom: 0;
  }
  &:only-of-type {
    margin-bottom: 0;
  }
  pointer-events: all;
  text-align: ${({ center = false }) => (center ? "center" : "left")};
  width: 100%;
`;

export const ColumnTitle = styled.p`
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-top: 2.5rem;
  color: ${({ text = "fgd" }) => color(text, 1)};
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
  color: ${({ text = "fgd" }) => color(text, 1)};
`;

export const ButtonPrimary = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 1rem -0.35rem ${color("fgd", 0.2)};
  border: solid 1px ${color("fgd", 0)};
  backdrop-filter: blur(1rem);
  color: ${color("fgd", 0.8)};
  background: ${color("can", 0.4)};
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 1px 1px 1px ${color("can", 1)};
  outline: none;
  z-index: 1;
  transform: scale(1);
  transition: all 0.25s ease;
  cursor: pointer;
  &:hover {
    background: ${color("can", 0.8)};
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.8);
  }
  ::selection {
    color: inherit;
    background: none;
  }
  pointer-events: all;
`;

export const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 2rem;
  outline: none;
  border: solid 1px ${color("fgd", 0.4)};
  color: ${color("fgd", 0.8)};
  background: ${color("can", 0.4)};
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 1px 1px 1px ${color("acc", 0)};
  z-index: 1;
  transform: scale(1);
  transition: all 0.25s ease;
  cursor: pointer;
  &:hover {
    background: ${color("acc", 0.4)};
    text-shadow: 1px 1px 1px ${color("acc", 1)};
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.8);
  }
  ::selection {
    color: inherit;
    background: none;
  }
  pointer-events: all;
`;

export const TertiaryButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  outline: none;
  border: solid 1px ${color("fgd", 0)};
  color: ${color("fgd", 0.8)};
  background: ${color("fgd", 0.05)};
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 1px 1px 1px ${color("acc", 0)};
  z-index: 1;
  transform: scale(1);
  transition: all 0.25s ease;
  cursor: pointer;
  &:hover {
    background: ${color("acc", 0.4)};
    text-shadow: 1px 1px 1px ${color("acc", 1)};
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.8);
  }
  ::selection {
    color: inherit;
    background: none;
  }
  pointer-events: all;
`;

export const Avatar = styled.img`
  display: block;
  width: 2rem;
  margin: -1rem 0.4rem -1rem -0.8rem;
  border-radius: 2rem;
  border: 1px solid hsla(0, 0%, 0%, 0.1);
`;

export const Bulb = styled.img`
  width: 0.75rem;
  height: 0.75rem;
  background: hsla(170, 75%, 35%, 1);
  margin-left: 0.5rem;
  box-shadow: 0 0.5rem 1rem -0.35rem hsla(0, 0%, 0%, 0.2),
    inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1),
    inset -0.15rem -0.15rem 0.25rem 0 hsla(0, 0%, 100%, 0.5);
  border-radius: 1rem;
`;

export const Divider = styled.div`
  position: relative;
  display: block;
  width: 1px;
  height: 8rem;
  background: ${({ foreground, background }) =>
    `linear-gradient(${color(foreground)} 0%, ${color(foreground)} 50%, ${color(
      background
    )} 100%);`};
  opacity: 0.25;
  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    margin-bottom: 1rem;
  }
`;

export const ProjectCardImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: ${columns(5)};
  overflow: hidden;
  padding: 0;
  & img {
    margin-top: 4rem;
    width: 120%;
  }
  @media (${mobileQueries}) {
    display: none;
  }
`;
