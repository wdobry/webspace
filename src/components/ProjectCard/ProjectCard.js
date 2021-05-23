import React from "react";
import { NavLink } from "react-router-dom";

import * as G from "components/global";

export const Header = ({ data, background, foreground, image, linkTo }) => {
  return (
    <>
      <NavLink to={linkTo} exact>
        <G.LayHorizontal col={8.8} space={0.4} background={background}>
          <G.LayVertical col={3}>
            <G.LaySpaceV s={4} />
            <G.LayVertical auto>
              <G.TypoInfo text={foreground}>{data.domain}</G.TypoInfo>
              <G.LaySpaceV s={1} />
              <G.TypoH2 text={foreground}>{data.title}</G.TypoH2>
            </G.LayVertical>
            <G.LaySpaceV s={4} />
            <G.TypoInfo bold text={foreground}>
              {data.company}
            </G.TypoInfo>
            <G.TypoInfo text={foreground}>{data.date}</G.TypoInfo>
            <G.TypoInfo text={foreground}>{data.role}</G.TypoInfo>
            <G.LaySpaceV s={4} />
          </G.LayVertical>
          <G.ProjectCardImage>
            <img src={image} alt="Project" />
          </G.ProjectCardImage>
        </G.LayHorizontal>
      </NavLink>
      <G.LaySpaceV s={4} />
    </>
  );
};

export default Header;
