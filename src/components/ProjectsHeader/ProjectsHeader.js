import React from "react";
import * as G from "components/global";

export const ProjectsHeader = () => {
  return (
    <G.Layout col={8} space={0} debug mCol={13}>
      <G.TypoH3>Selected Work</G.TypoH3>
      <G.TypoBody>2017 - 2021</G.TypoBody>
    </G.Layout>
  );
};

export default ProjectsHeader;
