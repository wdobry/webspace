import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "components/Home/Home";
import Upies from "components/Projects/Upies";
import Navigation from "components/Navigation/Navigation";

import "Reset.css";
import "App.css";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Route path="/" children={<Home />} exact />
      <Route path="/upies" children={<Upies />} exact />
    </Router>
  );
};

export default App;
