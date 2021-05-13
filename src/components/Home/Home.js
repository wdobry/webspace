import React from "react";

import Header from "components/Header/Header";
import ProjectCard from "components/ProjectCard/ProjectCard";
import ProjectsHeader from "components/ProjectsHeader/ProjectsHeader";

import phaseCard from "assets/phase/card.png";
import motherlodeCard from "assets/motherlode/card.png";
import upiesCard from "assets/upies/card.png";

export const Home = () => {
  return (
    <div>
      <Header />
      <ProjectsHeader />
      <ProjectCard
        image={phaseCard}
        background={"0, 0%, 18%"}
        foreground={"0, 0%, 100%"}
        data={{
          domain: "Design Software",
          title: `Novel Design Tool for${"\u00A0"}the Digital Era`,
          company: "Phase GmBH",
          date: "Nov 2017 - Nov 2019",
          role: "UI + UX + Lead",
        }}
      />
      <ProjectCard
        image={motherlodeCard}
        background={"0, 0%, 94%"}
        foreground={"0, 0%, 18%"}
        data={{
          domain: "Mobile App",
          title: `High Fashion Driven${"\u00A0"}by Gen Z`,
          company: "Motherlode",
          date: "Jan  2020 - Jan 2021",
          role: "UI + UX + Brand",
        }}
      />
      <ProjectCard
        image={upiesCard}
        background={"169, 100%, 20%"}
        foreground={"24, 100%, 86%"}
        data={{
          domain: "Mobile App",
          title: `Asynchronous Meetings for Teams`,
          company: "Upies.io",
          date: "Jan  2021 - Now",
          role: "UI + UX + Brand + Code",
        }}
      />
    </div>
  );
};

export default Home;
