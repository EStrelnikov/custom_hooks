import { useState, useEffect, useRef } from "react";

export function useHover() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const element = ref.current;
    function onMouseOver() {
      setHovered(true);
    }
    function onMouseOut() {
      setHovered(false);
    }
    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseout", onMouseOut);

    return () => {
      element.removeEventListener("mouseover", onMouseOver);
      element.removeEventListener("mouseout", onMouseOut);
    };
  }, [ref]);

  return { hovered, ref };
}
