import React from "react";
import * as G from "components/global";
import * as S from "./styles";

export const ProjectWrapper = ({ children, background }) => (
  <G.LayVertical center>
    <G.LaySpaceV s={8} />
    <G.LayVertical col={12} background={background} center>
      <G.LaySpaceV s={4} />
      {children}
    </G.LayVertical>
  </G.LayVertical>
);

export const ProjectIntro = ({ date, title, children, foreground }) => (
  <G.LayVertical col={12} space={3}>
    <G.TypoInfo text={foreground} center>
      {date}
    </G.TypoInfo>
    <G.TypoH1 text={foreground} center>
      {title}
    </G.TypoH1>
    <G.LaySpaceV s={2} />
    <G.TypoBody text={foreground} center>
      {children}
    </G.TypoBody>
    <G.LaySpaceV s={2} />
  </G.LayVertical>
);

export const ProjectSection = ({ title, children, foreground }) => (
  <G.LayVertical col={12} space={3}>
    <G.LaySpaceV s={2} />
    {title && (
      <>
        <G.TypoH2 text={foreground}>{title}</G.TypoH2>
        <G.LaySpaceV s={2} />
      </>
    )}
    <G.TypoBody text={foreground}>{children}</G.TypoBody>
  </G.LayVertical>
);

export const SkillTable = ({ foreground, background, data }) => {
  const columns = Object.keys(data);

  return (
    <G.LayVertical col={12} space={3}>
      <G.LaySpaceV s={2} />
      <S.TableWrapper>
        {columns.map((column, i) => (
          <>
            <S.Column>
              <G.ColumnTitle text={foreground}>{column}</G.ColumnTitle>
              {data[column].map((row) => (
                <G.Row text={foreground}>{row}</G.Row>
              ))}
            </S.Column>
            {i !== columns.length && (
              <G.Divider foreground={foreground} background={background} />
            )}
          </>
        ))}
      </S.TableWrapper>
    </G.LayVertical>
  );
};
