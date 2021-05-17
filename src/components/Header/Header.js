import React from "react";
import * as S from "./styles.js";

import hero from "assets/hero.png";

export const Header = () => {
  return (
    <>
      <S.Heading>
        Hi, I'm Wojciech,
        <br />
        Interaction <S.Upper>(HCI)</S.Upper> and Product Designer
      </S.Heading>
      <S.Paragraph>
        Educated as an architect-engineer. Love creative coding. Hyper maniac of{" "}
        <a
          href="https://www.afscet.asso.fr/Archives/Systemic-Approach-eng.pdf"
          target="blank"
        >
          a{"\u00A0"}systemic approach to everything
        </a>
        .
      </S.Paragraph>
      <S.Hero src={hero} />
    </>
  );
};

export default Header;
