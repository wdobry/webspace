import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { Experiments } from "views/experiments/Experiments";
import { Ray } from "views/experiments/ray/Ray";
import { Snap } from "views/experiments/snap/Snap";
import { Generative } from "views/experiments/generative/Generative";
import { About } from "views/about/About";

import Avatar from "assets/me.png";

import "./Reset.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="AppHero">
          <div className="AppHero-item">
            <img src={Avatar} alt="Just me" />
            <div>
              <p>The web space of</p>
              <h1>Wojciech Dobry</h1>
            </div>
          </div>
          <div className="AppHero-item">
            <div>
              <p>Curently living in</p>
              <h2>Taipei, Taiwan</h2>
            </div>
          </div>
          <div className="AppHero-item">
            <div>
              <p>Available from</p>
              <h2>December 16, 2020</h2>
            </div>
          </div>
        </div>
        <div className="AppNav">
          <p className="AppNav-group">Work</p>
          <NavLink
            className="disabled"
            activeClassName="active"
            exact
            to="/work/phase"
          >
            Phase
          </NavLink>
          <NavLink
            className="disabled"
            activeClassName="active"
            exact
            to="/work/motherlode"
          >
            Motherlode
          </NavLink>
          <NavLink
            className="disabled"
            activeClassName="active"
            exact
            to="/work/levelfields"
          >
            Levelfields
          </NavLink>
          <NavLink
            className="disabled"
            activeClassName="active"
            exact
            to="/work/contractbook"
          >
            Contractbook
          </NavLink>
          <NavLink
            className="disabled"
            activeClassName="active"
            exact
            to="/work/contractbook"
          >
            QuichiQuichi
          </NavLink>
          <p className="AppNav-group">Experiments</p>
          <NavLink activeClassName="active" exact to="/experiments/ray">
            Ray Tracing
          </NavLink>
          <NavLink activeClassName="active" exact to="/experiments/snap">
            Snap
          </NavLink>
          <NavLink activeClassName="active" exact to="/experiments/generative">
            Generative
          </NavLink>
        </div>
        <div className="AppView">
          <Route path="/experiments" children={<Experiments />} exact />
          <Route path="/about" children={<About />} exact />
          <Route path="/experiments/ray" children={<Ray />} exact />
          <Route path="/experiments/snap" children={<Snap />} exact />
          <Route
            path="/experiments/generative"
            children={<Generative />}
            exact
          />
        </div>
      </div>
    </Router>
  );
};

export default App;
