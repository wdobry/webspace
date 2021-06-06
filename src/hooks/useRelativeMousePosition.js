import { useState, useEffect } from "react";

const useMousePosition = (element) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (event) => {
    setMousePosition({
      x: event.clientX - element.current.offsetLeft,
      y: event.clientY - element.current.offsetTop,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element]);

  return mousePosition;
};

export default useMousePosition;
