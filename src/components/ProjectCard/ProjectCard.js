import React from "react";
import * as S from "./styles.js";
import { NavLink } from "react-router-dom";

export const Header = ({ data, background, foreground, image, linkTo }) => {
  return (
    <NavLink to={linkTo} exact>
      <S.Wrapper background={background} foreground={foreground}>
        <S.Domain>{data.domain}</S.Domain>
        <S.Heading>{data.title}</S.Heading>
        <S.Company>{data.company}</S.Company>
        <S.Info>{data.date}</S.Info>
        <S.Info>{data.role}</S.Info>
        <S.Hero src={image}></S.Hero>
      </S.Wrapper>
    </NavLink>
  );
};

export default Header;
