import React from "react";
import { useEffect } from "react";
import * as S from "./styles";

import i1 from "assets/upies/1.png";
import i2 from "assets/upies/2.png";
import i3 from "assets/upies/3.png";
import i4 from "assets/upies/4.png";
import i5 from "assets/upies/5.png";
import i6 from "assets/upies/6.png";
import i7 from "assets/upies/7.png";
import i8 from "assets/upies/8.png";
import i9 from "assets/upies/9.png";

export const Upies = () => {
  const F = "169, 100%, 20%";
  const B = "24, 100%, 86%";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrapper foreground={F} background={B}>
      <S.Center>
        <S.Date>Janury 2021 - Now</S.Date>
        <S.Heading>Equal and Fair Voice with Asynchronous Meetings</S.Heading>
        <S.Intro>
          Nowadays, many companies struggle with adjustments to remote work
          culture. Meetings overload plus mediocre moderation leads to stressful
          work environment. Being put in the environment alike pushed me into
          thinking…
        </S.Intro>
        <S.Spacer />
        <S.Img src={i1} width={80}></S.Img>
      </S.Center>
      <S.Spacer s={2} />
      <S.SectionTitle>The Challange</S.SectionTitle>
      <S.Paragraph>
        What if I could attend a meeting at any time I feel comfortable with? Or
        if I could share my ideas uninterrupted? Could I express myself fully
        with a video?
        <br />
        <br />I came up with a personal challenge — build a product that answers
        these questions. I wanted to move as fast as possible and do it now.
        That's why I've decided to make the whole MVP of Upies entirely by
        myself.
      </S.Paragraph>
      <S.Spacer s={3} />
      <SkillTable foreground={F} background={B} />
      <S.SectionTitle>Methodologies and Process</S.SectionTitle>
      <S.Paragraph>
        Creating a solo project forced me to change my process to one that would
        allow for early validation of the technology. The whole process started
        with some quick sketches in Figma. Once I was able to sketch out roughly
        what the interface could look like, I moved on to solving the technical
        problems.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img src={i2} width={50}></S.Img>
      <S.Spacer s={2} />
      <S.Paragraph>
        I diagramed the basic architecture and data structure, the user flow and
        started coding. I didn't stop until I had working user accounts, video
        upload, and workspace management. That was enough for me to validate
        tech (oh boy, I was wrong). Anyway — I had a "working" product, and it
        was time to dress it appropriately.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img src={i3} width={50}></S.Img>
      <S.Spacer s={1} />
      <S.SectionTitle>Defining the Tone</S.SectionTitle>
      <S.Paragraph>
        The majority of Upies was designed from code, without any design
        software. Therefore, the design initially has a notably neutral tone. On
        the one hand, I gained much more control over the entire interface, and
        I could iterate on it much faster. On the other, I've lost a "human
        touch." To add some life into this very generic style and save time,
        I've decided to use a stock illustration set by Alzea Arafat.
      </S.Paragraph>
      <S.Img src={i4} width={100}></S.Img>
      <S.Paragraph>
        I've created design tokens as my design system building blocks. The main
        goal of this approach was to prepare the app for customization by each
        user or organization. A limited color pallet was contributing to the
        idea of simple customization, but it felt too flat. So, I've decided to
        add a gradient variation to each color that was in use.
      </S.Paragraph>
      <S.Spacer s={3} />
      <S.Img src={i5} width={50}></S.Img>
      <S.Spacer s={1} />
      <S.Img src={i6} width={50}></S.Img>
      <S.Spacer s={1} />
      <S.SectionTitle>Wrapping Everything Around</S.SectionTitle>
      <S.Paragraph>
        Testing the product all the way throughout the process helped me
        realized early pain points for the users. Some people struggled with
        understanding the idea behind the asynchronous meetings. Therefore, I've
        decided to design a simple landing page that would explain the concept.
      </S.Paragraph>
      <S.Spacer s={3} />
      <S.Img src={i7} width={80}></S.Img>
      <S.Spacer s={3} />
      <S.Paragraph>
        To achieve a minimalistic appearance, Upies is packed with
        micro-interactions and small interfaces. Each interface is always
        contextual and has a single purpose. Therefore, Upies feels like a
        casual meeting room where you can focus on a single individual in your
        team.
      </S.Paragraph>
      <S.Spacer s={3} />
      <S.Img src={i8} width={80}></S.Img>
      <S.Spacer s={3} />
      <S.SectionTitle>Further Steps</S.SectionTitle>
      <S.Paragraph>
        Upies is an ongoing solo project. I constantly test it with various
        teams and build a roadmap based on the feedback. One of the nearest
        goals is to bring Upies into the native mobile world. Upies are
        equivalent to a "slow-food" concept but in the digital product world. My
        goal is to help remote teams communicate better and to encourage an
        equal and fair voice for all team members.
      </S.Paragraph>
      <S.Img src={i9} width={100}></S.Img>
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
        <S.ColumnTitle>Methodologies</S.ColumnTitle>
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
