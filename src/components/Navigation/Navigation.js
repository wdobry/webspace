import React from "react";

import * as S from "./styles";
import avatar from "assets/avatar.png";

export const Navigation = () => {
  return (
    <S.Wrapper>
      <S.NameWrapper>
        <S.Avatar src={avatar} />
        <S.Name>Wojciech Dobry</S.Name>
      </S.NameWrapper>
      <S.InfoWrapper>
        <S.Info>
          <S.InfoFirst>Product Designer</S.InfoFirst>
          <S.InfoSecond>Available for Hire</S.InfoSecond>
        </S.Info>
        <S.Info>
          <S.InfoFirst>Living in</S.InfoFirst>
          <S.InfoSecond>Taipei, Taiwan</S.InfoSecond>
        </S.Info>
        <S.Info>
          <S.InfoFirst>Curently</S.InfoFirst>
          <S.InfoSecond>6h ahead of you</S.InfoSecond>
        </S.Info>
      </S.InfoWrapper>
      <S.LinksWrapper>
        <S.Link>Work</S.Link>
        <S.Link>Resume</S.Link>
        <S.Link>About</S.Link>
      </S.LinksWrapper>
      <S.Button>Let's talk!</S.Button>
    </S.Wrapper>
  );
};

export default Navigation;
