import React from "react";
import { useEffect } from "react";
import * as S from "./styles";

import i_hero from "assets/phase/i_hero.jpg";
import i_process from "assets/phase/i_process.jpg";
import i_sys01 from "assets/phase/i_sys01.jpg";
import i_sys02 from "assets/phase/i_sys02.jpg";
import i_ui01 from "assets/phase/i_ui01.jpg";
import i_ui02 from "assets/phase/i_ui02.jpg";
import i_ui03 from "assets/phase/i_ui03.jpg";
import i_inter01 from "assets/phase/i_inter01.jpg";
import i_inter02 from "assets/phase/i_inter02.jpg";
import i_inter03 from "assets/phase/i_inter03.jpg";
import i_inter04 from "assets/phase/i_inter04.jpg";
import i_lang from "assets/phase/i_lang.jpg";
import i_pic01 from "assets/phase/i_pic01.jpg";
import i_pic02 from "assets/phase/i_pic02.jpg";
import i_pic03 from "assets/phase/i_pic03.jpg";
import i_pic04 from "assets/phase/i_pic04.jpg";
import i_pic05 from "assets/phase/i_pic05.jpg";
import i_pic06 from "assets/phase/i_pic06.jpg";
import i_pic07 from "assets/phase/i_pic07.jpg";
import i_pic08 from "assets/phase/i_pic08.jpg";

export const Phase = () => {
  const B = "221, 0%, 90%";
  const F = "221, 0%, 15%";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrapper foreground={F} background={B}>
      <S.Center>
        <S.Date>November 2017 - November 2019</S.Date>
        <S.Heading>
          Novel Design Tool
          <br />
          for the Digital Era
        </S.Heading>
        <S.Intro>
          Phase is interaction design software. My work covered product
          architecture creation, user experience design, interaction design,
          design systems, and user interface. Throughout the entire process, we
          worked closely with users around the globe. Therefore, I've validated
          their feedback against our models and incorporated it within.
        </S.Intro>
        <S.Spacer />
        <S.Img rad={0.25} src={i_hero} width={80}></S.Img>
      </S.Center>
      <S.Spacer s={2} />
      <S.SectionTitle>The Challange</S.SectionTitle>
      <S.Paragraph>
        Create a design software ready for the digital era. A software that
        flawlessly deals with stateful elements, adaptive layouts, digital
        input, code output, and much more. This case study covers over 2 years
        of work in a nutshell.
      </S.Paragraph>
      <S.Spacer s={3} />
      <SkillTable foreground={F} background={B} />
      <S.Spacer s={2} />
      <S.SectionTitle>Methodologies and Process</S.SectionTitle>
      <S.Paragraph>
        Due to the complexity of the system, documentation was a significant
        part of my work. At Phase, we developed the North Star system to
        document and create interrelated product models. It allows for agile
        management of complex specifications.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img rad={0.25} src={i_process} width={50}></S.Img>
      <S.Spacer s={2} />
      <S.Paragraph>
        Proposal - processing and gathering early-stage ideas
        <br />
        Stride - actionable document containing feature specs
        <br />
        North Star - current status of each model - updated with each change
      </S.Paragraph>
      <S.Spacer s={1} />
      <S.SectionTitle>System Complexity Maintenance</S.SectionTitle>
      <S.Paragraph>
        Creating a complex and interactive system requires a clear and
        consistent way of communicating all features. To better manage the
        design functionalities, I defined a simple modeling language based on
        SysML. It allows tracking of states and classes and what happens between
        them at the same time.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.ImgRow col="2fr 1fr">
        <S.Img rad={0.25} src={i_sys01} width={100}></S.Img>
        <S.Img rad={0.25} src={i_sys02} width={100}></S.Img>
      </S.ImgRow>
      <S.Spacer s={2} />
      <S.Paragraph>
        The majority of our documents were presented in the form of a state
        machine, sequence, and activity diagrams. For that, I've combined the
        visual representation of the interface within a class and state
        diagrams.
      </S.Paragraph>
      <S.Spacer s={1} />
      <S.SectionTitle>Interface Design </S.SectionTitle>
      <S.Paragraph>
        While system design challenged us with its complexity, the interface
        design presented us with a different problem. In design software, every
        interface pixel is expensive. Our goal was to maximize "canvas" space
        without losing any legibility. On the high level, we grouped the
        interface by the execution context. From there, we applied several
        different techniques to develop a robust and modular design system.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.ImgRow col="1fr 1fr 1fr">
        <S.Img rad={0.25} src={i_ui01} width={100}></S.Img>
        <S.Img rad={0.25} src={i_ui02} width={100}></S.Img>
        <S.Img rad={0.25} src={i_ui03} width={100}></S.Img>
      </S.ImgRow>
      <S.Spacer s={2} />
      <S.Paragraph>
        The first step was to develop a proper elevation. Elevation helps
        understand interface hierarchy and builds contrast. It was my early
        focus while creating a design system. It was crucial to creating a
        neutral color palette that wouldn't affect user-made design perception.
        <br />
        <br />
        Secondly, parametric and modular grids helped us frame and maintain all
        components. Finally, using space, padding, and module variables, I have
        created a solid yet easily customizable system. The last major part laid
        in the typographic
        <br />
        <br />
        The last major part laid in the typographic research. I've started with
        a goal to find a font readable in small sizes. In the second step, I've
        established the correct and accessible contrast between background and
        font color.
      </S.Paragraph>
      <S.Spacer s={1} />
      <S.SectionTitle>Interfaces and Models</S.SectionTitle>
      <S.Paragraph>
        Phase has dozens of interrelated interfaces and models. Creating each
        one of them was a project on its own. They had to collectively
        contribute to the core building blocks of interaction design.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img rad={0.25} src={i_inter01} width={50}></S.Img>
      <S.Spacer s={2} />
      <S.Paragraph>
        I've been working on models addressed to 3 primary user groups yet
        dressed with the same, higher-order design system. On top of that, each
        interface was operating within its own context and affecting the entire
        system.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img rad={0.25} src={i_inter02} width={50}></S.Img>
      <S.Spacer s={2} />
      <S.Paragraph>
        In the design team, in almost every sprint, we were cross-checking all
        models and interfaces, looking for possible simplifications. One of the
        measurements of "simplicity" we used was the number of steps required to
        accomplish the desired action.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.ImgRow col="1fr 1fr" width={80}>
        <S.Img rad={0.25} src={i_inter03} width={100}></S.Img>
        <S.Img rad={0.25} src={i_inter04} width={100}></S.Img>
      </S.ImgRow>
      <S.Spacer s={1} />
      <S.SectionTitle>Language and Status Visibility</S.SectionTitle>
      <S.Paragraph>
        One of the challenges was to create a consistent messaging system. One
        that would have a proper balance between legibility and space
        occupation. Besides color-coding messages and minimizing the number of
        message icons, we focused on maximum language clarity.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.Img rad={0.25} src={i_lang} width={50}></S.Img>
      <S.Spacer s={2} />
      <S.Paragraph>
        Another linguistic challenge was to name all the novel interfaces in a
        way they could be understood by different types of users. During this
        process, we've tested and changed several naming conventions based on
        user feedback.
      </S.Paragraph>
      <S.Spacer s={1} />
      <S.SectionTitle>Users, Community, and the Team</S.SectionTitle>
      <S.Paragraph>
        My work wasn't just design-centered. Across 2 years, I've facilitated
        numerous team meetings - discussing, analyzing, and solving design
        engineering and organization problems. Moreover, almost every day, I was
        in close touch with our users - gathering feedback, running tests, or
        simply networking.
      </S.Paragraph>
      <S.Spacer s={2} />
      <S.ImgRow col="398fr 470fr 393fr 331fr" width={100}>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_pic01} width={100}></S.Img>
          <S.Img rad={0.25} src={i_pic02} width={100}></S.Img>
        </S.ImgCol>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_pic03} width={100}></S.Img>
          <S.Img rad={0.25} src={i_pic04} width={100}></S.Img>
        </S.ImgCol>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_pic05} width={100}></S.Img>
          <S.Img rad={0.25} src={i_pic06} width={100}></S.Img>
        </S.ImgCol>
        <S.ImgCol>
          <S.Img rad={0.25} src={i_pic07} width={100}></S.Img>
          <S.Img rad={0.25} src={i_pic08} width={100}></S.Img>
        </S.ImgCol>
      </S.ImgRow>
      <S.Spacer s={2} />
      <S.Paragraph>
        Phase has organized and participated in dozens of international
        conferences. My goal was to communicate ideas between marketing and
        development teams to deliver meaningful interactive demos.
      </S.Paragraph>
      <S.Spacer s={1} />
      <S.SectionTitle>Measuring Success, Final Thoughts</S.SectionTitle>
      <S.Paragraph>
        In Phase, we've measured success in different areas - from setting up
        and quarterly checking our company and design team OKR's, monitoring
        NPS's, measuring task completion time and success rates, and others.
        <br />
        <br />
        For me, as a designer, the best measurement of success was to see other
        designers using Phase and shifting their expectations of what a novel
        design tool should be capable of.
        <br />
        <br />
        This case study covers only a fraction of the things we did at Phase
        during my time there. All of the work above wouldn't happen without Nick
        Budden (CEO, initial idea) and the entire Phase team.
      </S.Paragraph>
      <S.Spacer s={4} />
    </S.Wrapper>
  );
};

export default Phase;

const SkillTable = ({ foreground, background }) => {
  return (
    <S.TableWrapper>
      <S.Column>
        <S.ColumnTitle>Role</S.ColumnTitle>
        <S.Row>Lead Designer</S.Row>
        <S.ColumnTitle>Team Size</S.ColumnTitle>
        <S.Row>1-3 (design)</S.Row>
        <S.Row>7-12 (company)</S.Row>
      </S.Column>
      <S.Divider foreground={foreground} background={background} />
      <S.Column>
        <S.ColumnTitle>Methodologies</S.ColumnTitle>
        <S.Row>North Star</S.Row>
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
        <S.Row>Web</S.Row>
        <S.Row>Desktop</S.Row>
      </S.Column>
    </S.TableWrapper>
  );
};
