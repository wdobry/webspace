import React from "react";

export const SketchTodos = ({ children, list = [], span }) => (
  <div className="mar-b-4" style={{ gridColumn: `span ${span}` }}>
    <p className="description mar-b-1">Next Steps:</p>
    {list.map((item, i) => (
      <div key={i} className={`f-l-1 mar-b-1 ${item.status}`}>
        <p>{item.todo}</p>
      </div>
    ))}
  </div>
);

export default SketchTodos;
