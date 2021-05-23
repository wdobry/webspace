import React from "react";

import avatar from "assets/avatar.png";
import resume from "assets/wojciech_dobry_cv.pdf";

import * as G from "components/global";

export const Navigation = () => {
  return (
    <>
      <G.LayHorizontal space={0.5} height={6} center fixed z={2}>
        <G.ButtonPrimary href="/" exact>
          <G.Avatar src={avatar} />
          Wojciech Dobry
        </G.ButtonPrimary>
        <G.ButtonPrimary href="mailto:wdobry@gmail.com" target="blank">
          Let's talk!
          <G.Bulb />
        </G.ButtonPrimary>
      </G.LayHorizontal>
      <G.LayHorizontal space={3} height={6} center fixed z={0}>
        <G.LayHorizontal auto>
          <G.LayVertical auto>
            <G.TypoInfo>Product Designer</G.TypoInfo>
            <G.TypoInfo bold>Available for Hire</G.TypoInfo>
          </G.LayVertical>
          <G.LaySpaceH s={2} />
          <G.LayVertical auto>
            <G.TypoInfo>Curently living in</G.TypoInfo>
            <G.TypoInfo bold>Taipei, Taiwan</G.TypoInfo>
          </G.LayVertical>
        </G.LayHorizontal>
        <G.LayHorizontal auto>
          {/* <G.ALink href={resume} target="blank">
            Research
          </G.ALink>
          <G.LaySpaceH s={2} />
          <G.ALink href={resume} target="blank">
            About
          </G.ALink> */}
          <G.LaySpaceH s={2} />
          <G.ALink href={resume} target="blank">
            Résumé
          </G.ALink>
        </G.LayHorizontal>
      </G.LayHorizontal>
    </>
  );
};

export default Navigation;
