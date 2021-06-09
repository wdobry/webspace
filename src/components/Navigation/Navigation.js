import React from "react";

import avatar from "assets/avatar.png";
// import resume from "assets/wojciech_dobry_cv.pdf";

import * as G from "components/global";

export const Navigation = () => {
  return (
    <>
      <G.Layout
        horizontal
        mHorizontal
        space={0.5}
        mSpace={0.25}
        height={6}
        mHeight={3}
        center
        mCenter
        fixed
        z={2}
      >
        <G.ButtonPrimary href="/" exact>
          <G.Avatar src={avatar} />
          Wojciech Dobry
        </G.ButtonPrimary>
        <G.ButtonPrimary href="mailto:wdobry@gmail.com" target="blank">
          Let's talk!
          <G.Bulb />
        </G.ButtonPrimary>
      </G.Layout>
      <G.Layout horizontal space={3} height={6} center fixed z={0} mNone>
        <G.Layout horizontal auto>
          <G.Layout auto>
            <G.TypoInfo>Product Designer</G.TypoInfo>
            <G.TypoInfo bold>Available for Hire</G.TypoInfo>
          </G.Layout>
          <G.LaySpaceH s={2} />
          <G.Layout auto>
            <G.TypoInfo>Curently living in</G.TypoInfo>
            <G.TypoInfo bold>Taipei, Taiwan</G.TypoInfo>
          </G.Layout>
        </G.Layout>
        <G.Layout horizontal auto>
          {/* <G.ALink href={resume} target="blank">
            Research
          </G.ALink>
          <G.LaySpaceH s={2} />
          <G.ALink href={resume} target="blank">
            About
          </G.ALink> */}
          <G.LaySpaceH s={2} />
          {/* <G.ALink href={resume} target="blank">
            Résumé
          </G.ALink> */}
        </G.Layout>
      </G.Layout>
    </>
  );
};

export default Navigation;
