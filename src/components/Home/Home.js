import React from "react";

import Header from "components/Header/Header";
import ProjectCard from "components/ProjectCard/ProjectCard";
import ProjectsHeader from "components/ProjectsHeader/ProjectsHeader";

import phaseCard from "assets/phase/card.png";
import motherlodeCard from "assets/motherlode/card.png";
import upiesCard from "assets/upies/card.png";

import * as G from "components/global";

export const Home = () => {
  return (
    <G.Layout center>
      <G.LaySpaceV s={8} ms={0} />
      <G.Layout
        col={12}
        background={"bgd"}
        space={2}
        center
        noSpread
        events
        mCol={14}
        mCenter
      >
        <G.LaySpaceV s={6} ms={10} />
        <Header />
        <G.LaySpaceV s={6} ms={6} />
        <ProjectsHeader />
        <G.LaySpaceV s={2} />
        <ProjectCard
          linkTo={"phase"}
          image={phaseCard}
          background={"f-phs"}
          foreground={"b-phs"}
          data={{
            domain: "Design Software",
            title: `Novel Design Tool for${"\u00A0"}the Digital Era`,
            company: "Phase GmBH",
            date: "Nov 2017 - Nov 2019",
            role: "UI + UX + Lead",
          }}
        />
        <ProjectCard
          linkTo={"motherlode"}
          image={motherlodeCard}
          background={"can"}
          foreground={"f-mth"}
          data={{
            domain: "Mobile App",
            title: `High Fashion Driven${"\u00A0"}by Gen Z`,
            company: "Motherlode",
            date: "Jan  2020 - Jan 2021",
            role: "UI + UX + Brand",
          }}
        />
        <ProjectCard
          linkTo={"upies"}
          image={upiesCard}
          background={"f-ups"}
          foreground={"b-ups"}
          data={{
            domain: "Mobile App",
            title: `Asynchronous Meetings for Teams`,
            company: "Upies.io",
            date: "Jan  2021 - Now",
            role: "UI + UX + Brand + Code",
          }}
        />
        <G.LaySpaceV s={4} />
        {/* <G.Layout col={8} space={0} debug>
          <G.TypoH3>Research and Experiments</G.TypoH3>
          <G.TypoBody>2017 - 2021</G.TypoBody>
        </G.Layout> */}
      </G.Layout>
      <G.LaySpaceV s={2} />
    </G.Layout>
  );
};

export default Home;
