import React from "react";

import "./Hi.css";

export const Hi = ({ userName = "friend", userAvatar }) => {
  return (
    <div className="pad-t-6 pad-r-6 pad-l-4" style={{ gridColumn: "span 3" }}>
      <h1 className="f-h-1">Hello {userName}!</h1>
      <p className="f-b-1 pad-r-4">
        If you are here, we probably know each other well. I didn't manage to
        publish any website for years so I decided to start slowly. So far you
        can't find much here but I encourage you to check my design sketchs.
        Ultimately, this website is supposed to be a collection of my work.
      </p>
      <div className="lay-stack-horizontal " style={{ alignItems: "center" }}>
        <p className="f-b-2 pad-r-1">PS: You look beautiful today</p>
        <img
          src={userAvatar}
          className="pad-b-1 "
          style={{ width: "var(--size-08)" }}
          alt="Oh it's you!"
        />
      </div>
      {/* <p className="f-b-1 pad-r-4">
        To view content on this page you have to be logged in, it doesn't cost
        anything but it will help me a lot.
      </p>

      <h2>Todos</h2>
      <p>Fix routing on Netlify</p>
      <p>ASAP：Create RWD</p>
      <p>Find readable font and replace it</p>
      <p>Connect dobry.xyz domain</p>
      <p>Design Homepage</p>
      <p>Add Projects</p> */}
    </div>
  );
};

export default Hi;
