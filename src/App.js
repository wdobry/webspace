import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "components/Home/Home";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

import Upies from "components/Projects/Upies";
import Phase from "components/Projects/Phase";
import Motherlode from "components/Projects/Motherlode";
import Kitchen from "components/Kitchen/Kitchen";
import Border from "components/Experiments/Border";

import "Reset.css";
import "App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" children={<Home />} exact />
        <Route path="/upies" children={<Upies />} exact />
        <Route path="/phase" children={<Phase />} exact />
        <Route path="/motherlode" children={<Motherlode />} exact />
        <Route path="/kitchen" children={<Kitchen />} exact />
        <Route path="/border" children={<Border />} exact />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
