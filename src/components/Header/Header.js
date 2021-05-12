import React from "react";
import * as S from "./styles.js";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Title>Hi, I'm Wojciech Dobry</S.Title>
      <S.Heading>Interaction (HCI) and Digital Product Designer</S.Heading>
      <S.Paragraph>
        Educated as an architect-engineer. Love creative coding. Hyper maniac of{" "}
        <u>a systemic approach to everything</u>.
      </S.Paragraph>
    </S.Wrapper>
  );
};

export default Header;
