import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "components/Home/Home";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";

import Upies from "components/Projects/Upies";
import Phase from "components/Projects/Phase";

import "Reset.css";
import "App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" children={<Home />} exact />
      <Route path="/upies" children={<Upies />} exact />
      <Route path="/phase" children={<Phase />} exact />
      <Footer />
    </Router>
  );
};

export default App;
