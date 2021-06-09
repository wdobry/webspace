import React from "react";
import { useEffect } from "react";

import * as S from "./styles";
import * as G from "components/global";
import * as P from "./Elements";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    role: ["Lead Designer"],
    methodologies: ["Lean Development", "User Story Mapping", "SysML"],
    technologies: ["React", "Node.js", "React Spring", "Figma"],
    platform: ["Web", "Desktop"],
  };

  return (
    <P.ProjectWrapper background="b-ups">
      <P.ProjectIntro
        date="Janury 2021 - Now"
        title="Equal and Fair Voice with Asynchronous Meetings"
        foreground="f-ups"
      >
        Nowadays, many companies struggle with adjustments to remote work
        culture. Meetings overload plus mediocre moderation leads to a stressful
        work environment. Being put in the environment alike pushed me into
        thinking…
      </P.ProjectIntro>
      <S.ImgRow col="1fr">
        <S.Img src={i1} width={100}></S.Img>
      </S.ImgRow>
      <P.ProjectSection foreground="f-ups" title="The Challenge">
        What if I could attend a meeting at any time I feel comfortable with? Or
        if I could share my ideas uninterrupted? Could I express myself fully
        with a video?
        <br />
        <br />I came up with a personal challenge — build a product that answers
        these questions. I wanted to move as fast as possible and do it now.
        That's why I've decided to make the whole MVP of Upies entirely by
        myself.
      </P.ProjectSection>
      <P.SkillTable foreground="f-ups" background="b-ups" data={projectData} />
      <P.ProjectSection foreground="f-ups" title="Methodologies and Process">
        Creating a solo project forced me to change my process to one that would
        allow for early validation of the technology. The whole process started
        with some quick sketches in Figma. Once I was able to sketch out roughly
        what the interface could look like, I moved on to solving the technical
        problems.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.Img src={i2} width={50} mWidth={120}></S.Img>
      <P.ProjectSection foreground="f-ups">
        I diagramed the basic architecture and data structure, the user flow and
        started coding. I didn't stop until I had working user accounts, video
        upload, and workspace management. That was enough for me to validate
        tech (oh boy, I was wrong). Anyway — I had a "working" product, and it
        was time to dress it appropriately.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.Img src={i3} width={50} mWidth={92.5}></S.Img>
      <P.ProjectSection foreground="f-ups" title="Defining the Tone">
        The majority of Upies was designed from code, without any design
        software. Therefore, the design initially has a notably neutral tone. On
        the one hand, I gained much more control over the entire interface, and
        I could iterate on it much faster. On the other, I've lost a "human
        touch." To add some life into this very generic style and save time,
        I've decided to use a stock illustration set by Alzea Arafat.
      </P.ProjectSection>
      <S.Img src={i4} width={100} mWidth={185}></S.Img>
      <P.ProjectSection foreground="f-ups">
        I've created design tokens as my design system building blocks. The main
        goal of this approach was to prepare the app for customization by each
        user or organization. A limited color pallet was contributing to the
        idea of simple customization, but it felt too flat. So, I've decided to
        add a gradient variation to each color that was in use.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.Img src={i5} width={50} mWidth={92.5}></S.Img>
      <G.LaySpaceV s={1} />
      <S.Img src={i6} width={50} mWidth={92.5}></S.Img>
      <P.ProjectSection foreground="f-ups" title="Wrapping Everything Around">
        Testing the product all the way throughout the process helped me
        realized early pain points for the users. Some people struggled with
        understanding the idea behind the asynchronous meetings. Therefore, I've
        decided to design a simple landing page that would explain the concept.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.Img src={i7} width={80} mWidth={105}></S.Img>
      <P.ProjectSection foreground="f-ups">
        To achieve a minimalistic appearance, Upies is packed with
        micro-interactions and small interfaces. Each interface is always
        contextual and has a single purpose. Therefore, Upies feels like a
        casual meeting room where you can focus on a single individual in your
        team.
      </P.ProjectSection>
      <G.LaySpaceV s={2} />
      <S.Img src={i8} width={80} mWidth={102.5}></S.Img>
      <P.ProjectSection foreground="f-ups" title="Further Steps">
        Upies is an ongoing solo project. I constantly test it with various
        teams and build a roadmap based on the feedback. One of the nearest
        goals is to bring Upies into the native mobile world. Upies are
        equivalent to a "slow-food" concept but in the digital product world. My
        goal is to help remote teams communicate better and to encourage an
        equal and fair voice for all team members.
      </P.ProjectSection>
      <S.Img src={i9} width={100} mWidth={185}></S.Img>
    </P.ProjectWrapper>
  );
};

export default Upies;
