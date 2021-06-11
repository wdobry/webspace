import React from "react";
import * as G from "components/global.js";

// import hero from "assets/hero.png";

export const Header = () => {
  return (
    <G.Layout col={8} mCenter>
      <G.Layout col={4} mCol={13}>
        <G.TypoH1>
          Hi, I'm Wojciech,
          <br />
          Interaction <G.TypoSup>(HCI)</G.TypoSup> and <br />
          Product Designer
        </G.TypoH1>
        <G.LaySpaceV s={2} />
        <G.TypoBody>
          Educated as an architect-engineer.
          <br />
          Love creative coding. Hyper maniac of a{"\u00A0"}systemic approach to
          everything .
        </G.TypoBody>
      </G.Layout>
    </G.Layout>
  );
};

export default Header;
