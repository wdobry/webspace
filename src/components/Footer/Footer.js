import React from "react";
import * as G from "components/global";

export const Header = () => {
  return (
    <>
      <G.LaySpaceV s={4} />
      <G.LayVertical center z={0}>
        <G.LayHorizontal col={12} noSpread>
          <G.LaySpaceH s={12} />
          <G.LayVertical col={4}>
            <G.TypoH3>About</G.TypoH3>
            <G.LaySpaceV s={1} />
            <G.TypoBody>
              Wojciech Dobry is an independent consultant and digital product
              designer. Wojciech specializes in rapid MVP validation for SaaS
              platforms, system design and interaction design. Trained as an
              architect, he is a hobbyist programmer.
            </G.TypoBody>
            <G.LaySpaceV s={1} />
            <G.LayHorizontal auto noSpread>
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
            </G.LayHorizontal>
          </G.LayVertical>
          <G.LaySpaceH s={5} />
          <G.LayVertical col={3.5}>
            <G.TypoH3>Selected Publications</G.TypoH3>
            <G.LaySpaceV s={1} />
            <G.LayVertical col={3.5}>
              <G.TypoBody>
                <G.InlineLink
                  simple
                  href="https://www.toptal.com/designers/ui/framer-tutorial-using-real-data"
                  target="blank"
                >
                  Prototyping with Real Data
                </G.InlineLink>
                <G.LaySpaceV s={0.8} />
                <G.InlineLink
                  simple
                  href="https://www.toptal.com/designers/ui/design-framework"
                  target="blank"
                >
                  Building an Effective Design Framework
                </G.InlineLink>
                <G.LaySpaceV s={0.8} />
                <G.InlineLink
                  simple
                  href="https://www.toptal.com/designers/ui/future-ui-design-without-buttons"
                  target="blank"
                >
                  Future UI Design Without Buttons
                </G.InlineLink>
              </G.TypoBody>
            </G.LayVertical>
          </G.LayVertical>
        </G.LayHorizontal>
        <G.LaySpaceV s={4} />
      </G.LayVertical>
    </>
  );
};

export default Header;
