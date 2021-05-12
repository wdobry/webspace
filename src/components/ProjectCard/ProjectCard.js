import React from "react";
import * as S from "./styles.js";
// import { Route } from "react-router-dom";

export const Header = ({ data, background, foreground, image }) => {
  return (
    // <div>{/* <Route path="/system" children={<System />} exact /> */}</div>

    <S.Wrapper background={background} foreground={foreground}>
      <S.Domain>{data.domain}</S.Domain>
      <S.Heading>{data.title}</S.Heading>
      <S.Company>{data.company}</S.Company>
      <S.Info>{data.date}</S.Info>
      <S.Info>{data.role}</S.Info>
      <S.Hero src={image}></S.Hero>
    </S.Wrapper>
  );
};

export default Header;
