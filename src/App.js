import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { Ray } from "views/sketches/ray/Ray";
import { Snap } from "views/sketches/snap/Snap";
import { Generative } from "views/sketches/generative/Generative";
import { About } from "views/about/About";
import { Hi } from "views/hi/Hi";
import { System } from "views/system/System";
import { Particles } from "views/sketches/particles/Particles";

import { Menu } from "components/Menu";

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
      <div className="App lay-grid-col-12">
        {/* MENU */}
        <div className="span-dc-12 lay-grid-col-5 pad-f-1  ">
          <div className="lay-stack-horizontal ">
            <NavLink
              exact
              to="/"
              className="lay-stack-horizontal lay-align-center"
            >
              <img
                src={Avatar}
                alt="Just me"
                style={{ width: "var(--size-08)" }}
                className="mar-r-2"
              />
              <div>
                <p className="f-l-3">The web space of</p>
                <h1 className="f-l-2">Wojciech Dobry</h1>
              </div>
            </NavLink>
          </div>
          <div className="lay-stack-horizontal lay-align-center">
            <div>
              <p className="f-l-3">Curently living in</p>
              <h2 className="f-l-2">Taipei, Taiwan</h2>
            </div>
          </div>
          <div className="lay-stack-horizontal lay-align-center">
            <div>
              <p className="f-l-3">Available from</p>
              <h2 className="f-l-2">December 16, 2020</h2>
            </div>
          </div>
          <div className="lay-stack-horizontal lay-align-center">
            <div>
              <p className="f-l-3">
                Educated as an architect-engineer. Loves creative coding. Hyper
                maniac of systemic approach to everything.
              </p>
            </div>
          </div>
          <div
            className="lay-stack-horizontal lay-align-center pad-r-6"
            style={{ justifySelf: "right" }}
          >
            {user && <SignOut user={user} />}
          </div>
        </div>
        <Menu />
        <div className="AppView lay-grid-col-3">
          {!user ? (
            <>
              <SignIn />
            </>
          ) : (
            <>
              <Route
                path="/"
                children={
                  <Hi userName={user.displayName} userAvatar={user.photoURL} />
                }
                exact
              />
              <Route path="/system" children={<System />} exact />
              <Route path="/about" children={<About />} exact />
              <Route path="/sketches/ray" children={<Ray />} exact />
              <Route path="/sketches/snap" children={<Snap />} exact />
              <Route
                path="/sketches/particles/:w1f/:w1m/:w1n/:w1px/:w1py/:w2f/:w2m/:w2n/:w2px/:w2py/:cx/:cy/:cz/:crx/:cry"
                children={<Particles />}
                exact
              />
              <Route
                path="/sketches/generative"
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
    <div
      className="mar-t-6 pad-l-4 pad-r-6"
      style={{ gridColumn: "span 2", width: "70%" }}
    >
      <h2 className="f-h-2">Hey this website is only for logged in friends.</h2>
      <p className="f-b-2 mar-b-2">
        It meant to represent 00’ approach for WorldWideWeb design, where guests
        can leave their footprint forever and become a part of the experience.
      </p>
      <button className="button-primary" onClick={signInWithGoogle}>
        Continue with Google
      </button>
    </div>
  );
};

const SignOut = ({ user }) => {
  return (
    auth.currentUser && (
      <div className="SignButton">
        <button className="button-primary" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      </div>
    )
  );
};

export default App;
