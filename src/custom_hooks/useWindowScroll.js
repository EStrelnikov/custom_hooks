import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

const defaultValue = {
  x: window.scrollX.toFixed(),
  y: window.scrollY.toFixed(),
};

export function useWindowScroll() {
  const [valueScroll, setValueScroll] = useState(defaultValue);

  const scrollTo = ({ y }) => {
    window.scrollTo(valueScroll.x, y);
  };

  const setScroll = () => {
    setValueScroll({
      x: window.scrollX.toFixed(),
      y: window.scrollY.toFixed(),
    });
  };

  useWindowEvent("scroll", setScroll);

  return [valueScroll, scrollTo];
}
