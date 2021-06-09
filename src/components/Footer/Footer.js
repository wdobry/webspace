import React from "react";
import * as G from "components/global";

export const Header = () => {
  return (
    <>
      <G.LaySpaceV s={4} />
      <G.Layout center mCenter z={0}>
        <G.Layout horizontal col={12} mCol={13} noSpread>
          <G.LaySpaceH s={12} />
          <G.Layout col={4} mCol={13}>
            <G.TypoH3>About Author</G.TypoH3>
            <G.LaySpaceV s={1} ms={1} />
            <G.TypoBody>
              Wojciech Dobry is an independent consultant and digital product
              designer. He specializes in rapid MVP validation for SaaS
              platforms, system design and interaction design. Trained as an
              architect, he is a hobbyist programmer.
            </G.TypoBody>
            <G.LaySpaceV s={1} />
            <G.Layout horizontal mHorizontal auto noSpread>
              <G.TertiaryButton
                href="https://www.linkedin.com/in/wojciech-dobry/"
                target="blank"
              >
                LinkedIn
              </G.TertiaryButton>
              <G.LaySpaceH s={1} />
              <G.TertiaryButton
                href="https://dribbble.com/wojciech-dobry"
                target="blank"
              >
                Dribbble
              </G.TertiaryButton>
              <G.LaySpaceH s={1} />
              <G.TertiaryButton href="mailto:wdobry@gmail.com" target="blank">
                Email
              </G.TertiaryButton>
            </G.Layout>
          </G.Layout>
          <G.LaySpaceH s={5} />
          <G.LaySpaceV s={0} ms={4} />
          <G.Layout col={3.5} mCol={13}>
            <G.TypoH3>Selected Publications</G.TypoH3>
            <G.LaySpaceV s={1} ms={1} />
            <G.Layout col={3.5} mCol={13}>
              <G.TypoBody>
                <G.InlineLink
                  simple
                  href="https://www.toptal.com/designers/ui/framer-tutorial-using-real-data"
                  target="blank"
                >
                  Prototyping with Real Data
                </G.InlineLink>
                <G.LaySpaceV s={0.8} ms={0.8} />
                <G.InlineLink
                  simple
                  href="https://www.toptal.com/designers/ui/design-framework"
                  target="blank"
                >
                  Building an Effective Design Framework
                </G.InlineLink>
                <G.LaySpaceV s={0.8} ms={0.8} />
                <G.InlineLink
                  simple
                  href="https://www.toptal.com/designers/ui/future-ui-design-without-buttons"
                  target="blank"
                >
                  Future UI Design Without Buttons
                </G.InlineLink>
              </G.TypoBody>
            </G.Layout>
          </G.Layout>
        </G.Layout>
        <G.LaySpaceV s={4} ms={4} />
      </G.Layout>
    </>
  );
};

export default Header;
