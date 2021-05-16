import React from "react";
import * as S from "./styles.js";

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
        <u>a{"\u00A0"}systemic approach to everything</u>.
      </S.Paragraph>
    </>
  );
};

export default Header;
