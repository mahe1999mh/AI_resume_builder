import { useRef } from "react";

const useDebounce = (callback, delay) => {
  const timer = useRef();

  const debouncedCallback = (...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
