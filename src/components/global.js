import React from "react";
// import { useState, useEffect } from "react";

import * as G from "components/globalStyles";

import { useKeyPress } from "hooks/useKeyPress";

export const UtilityText = ({ children }) => {
  return <G.UtilityText>{children}</G.UtilityText>;
};

export const LaySpaceV = ({ children, s, ms }) => {
  const debugMode = useKeyPress("f");

  return (
    <G.LaySpaceV s={s} ms={ms} debugAll={debugMode}>
      {children}
    </G.LaySpaceV>
  );
};

export const LaySpaceH = ({ children, s, ms }) => {
  const debugMode = useKeyPress("f");

  return (
    <G.LaySpaceH s={s} ms={ms} debugAll={debugMode}>
      {children}
    </G.LaySpaceH>
  );
};

export const Layout = ({
  children,
  fixed,
  horizontal,
  center,
  col,
  space,
  auto,
  background,
  rad,
  height,
  z,
  noSpread,
  events,
  reference,
  mNone,
  mHorizontal,
  mCol,
  mSpace,
  mCenter,
  mHeight,
}) => {
  const debugMode = useKeyPress("f");

  return (
    <G.Layout
      fixed={fixed}
      horizontal={horizontal}
      center={center}
      col={col}
      space={space}
      auto={auto}
      background={background}
      rad={rad}
      height={height}
      z={z}
      noSpread={noSpread}
      debugAll={debugMode}
      events={events}
      ref={reference}
      mNone={mNone}
      mHorizontal={mHorizontal}
      mCol={mCol}
      mSpace={mSpace}
      mCenter={mCenter}
      mHeight={mHeight}
    >
      {children}
    </G.Layout>
  );
};

export const TypoH1 = ({ children, text, center }) => {
  const debugMode = useKeyPress("f");

  return (
    <G.TypoH1 text={text} center={center} debugAll={debugMode}>
      {children}
    </G.TypoH1>
  );
};

export const TypoH2 = ({ children, text, center }) => {
  const debugMode = useKeyPress("f");

  return (
    <G.TypoH2 text={text} center={center} debugAll={debugMode}>
      {children}
    </G.TypoH2>
  );
};

export const TypoH3 = ({ children, text, center }) => {
  const debugMode = useKeyPress("f");

  return (
    <G.TypoH3 text={text} center={center} debugAll={debugMode}>
      {children}
    </G.TypoH3>
  );
};
export const TypoBody = ({ children, text, center }) => {
  const debugMode = useKeyPress("f");

  return (
    <G.TypoBody text={text} center={center} debugAll={debugMode}>
      {children}
    </G.TypoBody>
  );
};

export const TypoSup = ({ children, center }) => {
  return <G.TypoSup center={center}>{children}</G.TypoSup>;
};

export const TypoSub = ({ children, center }) => {
  return <G.TypoSub center={center}>{children}</G.TypoSub>;
};

export const InlineLink = ({ children, text, simple, href, target }) => {
  return (
    <G.InlineLink text={text} simple={simple} href={href} target={target}>
      {children}
    </G.InlineLink>
  );
};

export const ALink = ({ children, href, target }) => {
  return (
    <G.ALink href={href} target={target}>
      {children}
    </G.ALink>
  );
};

export const TypoInfo = ({ children, bold, text, center }) => {
  return (
    <G.TypoInfo bold={bold} text={text} center={center}>
      {children}
    </G.TypoInfo>
  );
};

export const ColumnTitle = ({ children, text }) => {
  return <G.ColumnTitle text={text}>{children}</G.ColumnTitle>;
};

export const Row = ({ children, text }) => {
  return <G.Row text={text}>{children}</G.Row>;
};
export const ButtonPrimary = ({ children, href, target }) => {
  return (
    <G.ButtonPrimary href={href} target={target}>
      {children}
    </G.ButtonPrimary>
  );
};

export const SecondaryButton = ({ children, href, target }) => {
  return (
    <G.SecondaryButton href={href} target={target}>
      {children}
    </G.SecondaryButton>
  );
};

export const TertiaryButton = ({ children, href, target }) => {
  return (
    <G.TertiaryButton href={href} target={target}>
      {children}
    </G.TertiaryButton>
  );
};

export const Avatar = ({ children, src }) => {
  return <G.Avatar src={src}>{children}</G.Avatar>;
};

export const Bulb = ({ children }) => {
  return <G.Bulb>{children}</G.Bulb>;
};

export const Divider = ({ children, foreground, background }) => {
  return (
    <G.Divider foreground={foreground} background={background}>
      {children}
    </G.Divider>
  );
};

export const ProjectCardImage = ({ children }) => {
  return <G.ProjectCardImage>{children}</G.ProjectCardImage>;
};
