import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ children, to, disabled = false }) => (
  <NavLink
    className={
      !disabled ? "l-1 f-l-2 pad-t-1 pad-b-1" : "l-1-d f-l-2 pad-t-1 pad-b-1"
    }
    activeClassName="l-1-a"
    exact
    to={to}
  >
    <div>{children}</div>
  </NavLink>
);

export const Menu = () => {
  return (
    <div className="span-dc-2 lay-stack-vertical pad-t-6 pad-l-2">
      <Link disabled to="/work/phase">
        Phase
      </Link>
      <Link disabled to="/work/motherlode">
        Motherlode
      </Link>
      <Link disabled to="/work/levelfields">
        Levelfields
      </Link>
      <Link disabled to="/work/contractbook">
        Contractbook
      </Link>
      <Link disabled to="/work/quichiquichi">
        QuichiQuichi
      </Link>
      <Link to="/sketches/ray">Predict Pointer Position</Link>
      <Link to="/sketches/snap">Snap to Element</Link>
      <Link to="/sketches/generative">Generative Design</Link>
      <Link to="/sketches/particles/1/1/0/0/0/1/1/0/0/0/0/25/125/-0.25/0.75/0">
        Wave Particles
      </Link>
    </div>
  );
};

export default Menu;
