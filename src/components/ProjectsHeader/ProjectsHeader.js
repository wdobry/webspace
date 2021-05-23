import React from "react";
import * as G from "components/global";

export const ProjectsHeader = () => {
  return (
    <G.LayVertical col={8} space={0} debug>
      <G.TypoH3>Selected Work</G.TypoH3>
      <G.TypoBody>2017 - 2021</G.TypoBody>
    </G.LayVertical>
  );
};

export default ProjectsHeader;
