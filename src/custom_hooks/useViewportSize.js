import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

const initialSize = {
  height: window.innerHeight,
  width: window.innerWidth,
};

export function useViewportSize() {
  const [size, setSize] = useState(initialSize);

  const saveSize = () => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  };

  useWindowEvent("resize", saveSize);

  return { height: size.height, width: size.width };
}
