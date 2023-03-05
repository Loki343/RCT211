import { useRef } from "react";

export const useThrottle = (func, delay) => {
  let { current: wait } = useRef(false);

  return () => {
    if (wait) return;
    func();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};
