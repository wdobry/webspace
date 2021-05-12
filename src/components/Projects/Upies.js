import React from "react";
import * as S from "./styles";

import i1 from "assets/upies/1.png";
import i2 from "assets/upies/2.png";

export const Upies = () => {
  const F = "169, 100%, 20%";
  const B = "24, 100%, 86%";
  return (
    <S.Wrapper foreground={F} background={B}>
      <S.Center>
        <S.Date>Janury 2021 - Now</S.Date>
        <S.Heading>Equal and Fair Voice with Asynchronous Meetings</S.Heading>
        <S.Intro>
          Nowadays many companies struggle with adjustments to remote work
          culture. Meetings overload plus mediocre moderation leads to stressful
          situations. Being put in the environment alike pushed me into
          thinking…
        </S.Intro>
        <S.Spacer />
        <S.Img src={i1} width={80}></S.Img>
      </S.Center>
      <S.SectionTitle>The Challange</S.SectionTitle>
      <S.Paragraph>
        What if I could attend a meeting at any time I feel comfortable with? Or
        if I could share my ideas uninterrupted? Could express fully myself with
        video?
        <br />
        <br />I came up with a personal challenge - build a product that answers
        these questions. I wanted to move as fast as possible and do it now.
        That’s why I’ve decided to build the entire MVP of Upies entirely by
        myself.
      </S.Paragraph>
      <S.Spacer s={3} />
      <SkillTable foreground={F} background={B} />
      <S.SectionTitle>Methodologies and Process</S.SectionTitle>
      <S.Paragraph>
        What if I could attend a meeting at any time I feel comfortable with? Or
        if I could share my ideas uninterrupted? Could express fully myself with
        video?
        <br />
        <br />I came up with a personal challenge - build a product that answers
        these questions. I wanted to move as fast as possible and do it now.
        That’s why I’ve decided to build the entire MVP of Upies entirely by
        myself.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img src={i2} width={50}></S.Img>
    </S.Wrapper>
  );
};

export default Upies;

const SkillTable = ({ foreground, background }) => {
  return (
    <S.TableWrapper>
      <S.Column>
        <S.ColumnTitle>Role</S.ColumnTitle>
        <S.Row>Full Stack</S.Row>
        <S.ColumnTitle>Time frame</S.ColumnTitle>
        <S.Row>2021 - Now</S.Row>
      </S.Column>
      <S.Divider foreground={foreground} background={background} />
      <S.Column>
        <S.ColumnTitle>Methodology</S.ColumnTitle>
        <S.Row>Lean Development</S.Row>
        <S.Row>User Story Mapping</S.Row>
        <S.Row>SysML</S.Row>
      </S.Column>
      <S.Divider foreground={foreground} background={background} />
      <S.Column>
        <S.ColumnTitle>Technologies</S.ColumnTitle>
        <S.Row>React</S.Row>
        <S.Row>Node.js</S.Row>
        <S.Row>React Spring</S.Row>
        <S.Row>Figma</S.Row>
      </S.Column>
      <S.Divider foreground={foreground} background={background} />
      <S.Column>
        <S.ColumnTitle>Platform</S.ColumnTitle>
        <S.Row>Desktop</S.Row>
        <S.Row>Mobile (PWA)</S.Row>
      </S.Column>
    </S.TableWrapper>
  );
};
