import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { Experiments } from "views/experiments/Experiments";
import { Ray } from "views/experiments/ray/Ray";
import { Snap } from "views/experiments/snap/Snap";
import { Generative } from "views/experiments/generative/Generative";
import { About } from "views/about/About";
import { Hi } from "views/hi/Hi";

import Avatar from "assets/me.png";

import "./Reset.css";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDtKml2OTyLUVUqtXimVEdW4GbPrR8EEM8",
  authDomain: "my-web-space-341ab.firebaseapp.com",
  databaseURL: "https://my-web-space-341ab.firebaseio.com",
  projectId: "my-web-space-341ab",
  storageBucket: "my-web-space-341ab.appspot.com",
  messagingSenderId: "478940935041",
  appId: "1:478940935041:web:d34c179da62ed98be96e80",
  measurementId: "G-92NW0RE7YW",
});

const auth = firebase.auth();
// const firestore = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="App">
        <div className="AppHero">
          <div className="AppHero-item">
            <NavLink exact to="/">
              <img src={Avatar} alt="Just me" />
              <div>
                <p>The web space of</p>
                <h1>Wojciech Dobry</h1>
              </div>
            </NavLink>
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
          {user && <SignOut />}
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
            Predict Pointer Position
          </NavLink>
          <NavLink activeClassName="active" exact to="/experiments/snap">
            Snap to Element
          </NavLink>
          <NavLink activeClassName="active" exact to="/experiments/generative">
            Generative Design
          </NavLink>
        </div>
        <div className="AppView">
          {!user ? (
            <>
              No elo, kliknij lognij: <SignIn />
            </>
          ) : (
            <>
              <Route path="/" children={<Hi />} exact />
              <Route path="/experiments" children={<Experiments />} exact />
              <Route path="/about" children={<About />} exact />
              <Route path="/experiments/ray" children={<Ray />} exact />
              <Route path="/experiments/snap" children={<Snap />} exact />
              <Route
                path="/experiments/generative"
                children={<Generative />}
                exact
              />
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="SignButton">
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

const SignOut = () => {
  return (
    auth.currentUser && (
      <div className="SignButton">
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    )
  );
};

export default App;
