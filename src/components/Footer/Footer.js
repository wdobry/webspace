import React from "react";
import * as S from "./styles.js";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.LinksWrapper>
        <S.AboutWrapper>
          <S.Heading>About</S.Heading>
          <S.Paragraph>
            Wojciech Dobry is an independent consultant and digital product
            designer. Wojciech specializes in rapid MVP validation for SaaS
            platforms, system design and interaction design. Trained as an
            architect, he is a hobbyist programmer. He has been living in
            Taipei, Taiwan since 2017.
          </S.Paragraph>
          <S.Spacer s={2} />
          <S.LinksWrapper>
            <S.CLink
              href="https://www.linkedin.com/in/wojciech-dobry/"
              target="blank"
            >
              LinkedIn
            </S.CLink>
            <S.CLink href="https://dribbble.com/wojciech-dobry" target="blank">
              Dribbble
            </S.CLink>
            <S.CLink href="mailto:wdobry@gmail.com" target="blank">
              Email
            </S.CLink>
          </S.LinksWrapper>
        </S.AboutWrapper>
        <div>
          <S.Heading>Selected Publications</S.Heading>
          <S.PubWrapper>
            <S.PLink
              href="https://www.toptal.com/designers/ui/framer-tutorial-using-real-data"
              target="blank"
            >
              Prototyping with Real Data
            </S.PLink>
            <S.PLink
              href="https://www.toptal.com/designers/ui/design-framework"
              target="blank"
            >
              Building an Effective Design Framework
            </S.PLink>
            <S.PLink
              href="https://www.toptal.com/designers/ui/future-ui-design-without-buttons"
              target="blank"
            >
              Future UI Design Without Buttons
            </S.PLink>
          </S.PubWrapper>
        </div>
      </S.LinksWrapper>
    </S.Wrapper>
  );
};

export default Header;
