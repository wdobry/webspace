import React from "react";
import { useEffect } from "react";

import * as S from "./styles";
import * as G from "components/global";
import * as P from "./Elements";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    role: ["Lead Designer"],
    methodologies: ["North Star", "SysML"],
    team: ["1-3 (design)", "7-12 (company)"],
    platform: ["Web", "Desktop"],
  };

  return (
    <P.ProjectWrapper background="b-phs">
      <P.ProjectIntro
        date="November 2017 - November 2019"
        title={"Novel Design Tool \nfor the Digital Era"}
      >
        Phase is interaction design software. My work covered product
        architecture creation, user experience design, interaction design,
        design systems, and user interface. Throughout the entire process, we
        worked closely with users around the globe. Therefore, I've validated
        their feedback against our models and incorporated it within.
      </P.ProjectIntro>
      <S.ImgRow col="1fr">
        <S.Img rad={0.25} src={i_hero} width={100}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs" title="The Challenge">
        Create a design software ready for the digital era. A software that
        flawlessly deals with stateful elements, adaptive layouts, digital
        input, code output, and much more. This case study summarizes over 2
        years of work in a nutshell.
      </P.ProjectSection>
      <P.SkillTable foreground="f-phs" background="b-phs" data={projectData} />
      <P.ProjectSection foreground="f-phs" title="Methodologies and Process">
        Due to the complexity of the system, documentation was a significant
        part of my work. At Phase, we developed the North Star system to
        document and create interrelated product models. It allows for agile
        management of complex specifications.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="1fr">
        <S.Img rad={0.25} src={i_process} width={62.5}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs">
        Proposal — processing and gathering early-stage ideas
        <br />
        Stride — actionable document containing feature specs
        <br />
        North Star — current status of each model — updated with each change
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ALink
        href="https://blog.prototypr.io/north-star-product-management-b463fa1ff8a"
        target="blank"
      >
        Read our article about North Star management
      </S.ALink>
      <P.ProjectSection
        foreground="f-phs"
        title="System Complexity Maintenance"
      >
        Creating a complex and interactive system requires a clear and
        consistent way of communicating all features. To better manage the
        design functionalities, I defined a simple modeling language based on
        SysML. It allows tracking of states and classes and what happens between
        them at the same time.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="2fr 1fr">
        <S.Img rad={0.25} src={i_sys01} width={100}></S.Img>
        <S.Img rad={0.25} src={i_sys02} width={100}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs">
        The majority of our documents were presented in the form of a state
        machine, sequence, and activity diagrams. For that, I've combined the
        visual representation of the interface within a class and state
        diagrams.
      </P.ProjectSection>
      <P.ProjectSection foreground="f-phs" title="Interface Design">
        While system design challenged us with its complexity, the interface
        design presented us with a different problem. In design software, every
        interface pixel is expensive. Our goal was to maximize "canvas" space
        without losing any legibility. On the high level, we grouped the
        interface components by execution context. From there, we applied
        several different techniques to develop a robust and modular design
        system.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="1fr 1fr 1fr">
        <S.Img rad={0.25} src={i_ui01} width={100}></S.Img>
        <S.Img rad={0.25} src={i_ui02} width={100}></S.Img>
        <S.Img rad={0.25} src={i_ui03} width={100}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs">
        The first step was to develop a proper elevation. Elevation helps
        understand interface hierarchy and builds contrast. It was my early
        focus while creating a design system. It was crucial to creating a
        neutral color palette that wouldn't affect user-made design perception.
        <br />
        <br />
        Secondly, parametric and modular grids helped us frame and maintain all
        components. Finally, using space, padding, and module variables, I have
        created a solid yet easily customizable system.
        <br />
        <br />
        The last major part laid in the typographic research. I've started with
        a goal to find a font readable in small sizes. In the second step, I've
        established the correct and accessible contrast between background and
        font color.
      </P.ProjectSection>
      <P.ProjectSection foreground="f-phs" title="Interfaces and Models">
        Phase has dozens of interrelated interfaces and models. We treated each
        one of them as a project in their own right. They had to collectively
        contribute to the core building blocks of interaction design.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="1fr">
        <S.Img rad={0.25} src={i_inter01} width={62.5}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs">
        I've been working on models addressed to three primary user groups yet
        dressed with the same, higher-order design system. On top of that, each
        interface was operating within its own context yet affecting the entire
        system.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="1fr">
        <S.Img rad={0.25} src={i_inter02} width={62.5}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs">
        In the design team, in almost every sprint, we were cross-checking all
        models and interfaces, looking for possible simplifications. One of the
        measurements of simplicity we used was the number of steps required to
        accomplish the desired action.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="1fr 1fr" width={80}>
        <S.Img rad={0.25} src={i_inter03} width={100}></S.Img>
        <S.Img rad={0.25} src={i_inter04} width={100}></S.Img>
      </S.ImgRow>
      <P.ProjectSection
        foreground="f-phs"
        title="Language and Status Visibility"
      >
        Creating a consistent messaging system was one of the key challenges -
        one that would have a proper balance between legibility and space
        occupation. Besides color-coding messages and minimizing the number of
        message icons, we focused on maximum language clarity.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.ImgRow col="1fr">
        <S.Img rad={0.25} src={i_lang} width={62.5}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-phs">
        Another linguistic challenge was to name all the novel interfaces in a
        way that they could be understood by different types of users. During
        this process, we've tested and changed several naming conventions based
        on user feedback.
      </P.ProjectSection>
      <P.ProjectSection
        foreground="f-phs"
        title="Users, Community, and the Team"
      >
        My work wasn't just design-centered. Over those two years, I facilitated
        numerous team meetings — discussing, analyzing, and solving design
        engineering and organization problems. Moreover, almost every day, I was
        in close touch with our users — gathering feedback, running tests, or
        simply networking.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
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
      <P.ProjectSection foreground="f-phs">
        Phase has organized and participated in dozens of international
        conferences. My goal was to communicate ideas between marketing and
        development teams to deliver meaningful interactive demos.
      </P.ProjectSection>
      <P.ProjectSection
        foreground="f-phs"
        title="Measuring Success, Final Thoughts"
      >
        In Phase, we've measured success in different areas — from setting up
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
        during my time there. All of the work above wouldn not have happen
        without Nick Budden (CEO, initial idea), Vlad Shvets (CMO), Chad Duffy
        (CTO) and the entire Phase team.
      </P.ProjectSection>
      <G.LaySpaceV s={6} ms={4} />
    </P.ProjectWrapper>
  );
};

export default Phase;
