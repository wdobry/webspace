import React from "react";

import "./Hi.css";

export const Hi = () => {
  return (
    <div className="HiCard">
      <h1>Hello!</h1>
      <p>
        if you are on this site, we probably know each other well. I haven't
        managed to pubpsh any website for years so I decided to start slowly. So
        far you can't find much here but I encourage you to check my design
        experiments. Ultimately, this page is supposed to be a collection of my
        work.
      </p>
      <p className="HiCard-info">
        To view content on this page you have to be logged in, it doesn't cost
        anything but it will help me a lot.
      </p>

      <h2>Todos</h2>
      <p>Fix routing on Netlify</p>
      <p>ASAP：Create RWD</p>
      <p>Find readable font and replace it</p>
      <p>Connect dobry.xyz domain</p>
      <p>Design Homepage</p>
      <p>Add Projects</p>
    </div>
  );
};

export default Hi;
