import React from "react";

import "./System.css";

export const System = () => {
  return (
    <div className="System">
      <div className="span-dc-2 dec-l-bottom mar-b-1 pad-b-1">
        <p className="description  ">Sizes</p>
      </div>
      <div className="span-dc-2 lay-stack-horizontal mar-b-1">
        {[...Array(12)].map((item, i) => (
          <div
            style={{
              width: `var(--size-${
                `${i + 1}`.length > 1 ? `${i + 1}` : `0${i + 1}`
              })`,
              height: `var(--size-${
                `${i + 1}`.length > 1 ? `${i + 1}` : `0${i + 1}`
              })`,
              background: "var(--color-fg-50)",
            }}
          ></div>
        ))}
      </div>
      <div className="span-dc-2 dec-l-bottom mar-b-1 pad-b-1">
        <p className="description  ">Typography</p>
      </div>
      <p className="description">Heading 1</p>
      <p className="f-h-1">Lorem ipsum dolor sit amet.</p>
      <p className="description">Heading 2</p>
      <p className="f-h-2">Consectetur adipiscing elit.</p>
      <p className="description">Heading 3</p>
      <p className="f-h-3">Non dui nisl phasellus sagittis ultrices odio.</p>
      <p className="description">Heading 4</p>
      <p className="f-h-4">
        In nec venenatis quam. Donec id diam metus. Phasellus sagittis ultrices
        odio.
      </p>
      <p className="description">Heading 5</p>
      <p className="f-h-5">
        Phasellus sagittis ultrices odio. In nec venenatis quam. Donec id diam
        metus.
      </p>
      <p className="description">Body 1</p>
      <p className="f-b-1">
        In nec venenatis quam. Donec id diam metus. Aenean tincidunt massa quis
        tincidunt tempus. Phasellus quis imperdiet urna. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Phasellus sagittis ultrices odio,
        quis viverra dui bibendum dapibus. Morbi non dui nisl. Quisque odio
        elit, euismod sed libero ac, eleifend gravida felis. In nec venenatis
        quam. Donec id diam metus. Aenean tincidunt massa quis tincidunt tempus.
        Phasellus quis imperdiet urna.
      </p>
      <p className="description">Body 2</p>
      <p className="f-b-2">
        In nec venenatis quam. Donec id diam metus. Aenean tincidunt massa quis
        tincidunt tempus. Phasellus quis imperdiet urna. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Phasellus sagittis ultrices odio,
        quis viverra dui bibendum dapibus. Morbi non dui nisl. Quisque odio
        elit, euismod sed libero ac, eleifend gravida felis. In nec venenatis
        quam. Donec id diam metus. Aenean tincidunt massa quis tincidunt tempus.
        Phasellus quis imperdiet urna.
      </p>
      <div className="span-dc-2 dec-l-bottom mar-b-1 pad-b-1">
        <p className="description">Layout</p>
      </div>
      <p className="description  ">Stack vertical</p>
      <div className="lay-stack-vertical">
        {[...Array(3)].map((item, i) => (
          <p className="description pad-f-1 dec-l-full">Layout Item {i + 1}</p>
        ))}
      </div>
      <div className="span-dc-2 mar-b-1"></div>
      <p className="description  ">Stack Horizontal</p>
      <div className="lay-stack-horizontal">
        {[...Array(3)].map((item, i) => (
          <p className="description pad-f-1 dec-l-full">Layout Item {i + 1}</p>
        ))}
      </div>
      <div className="span-dc-2 mar-b-1"></div>
      <div className="span-dc-2 dec-l-bottom mar-b-1 pad-b-1">
        <p className="description">Decorations</p>
      </div>
    </div>
  );
};

export default System;
