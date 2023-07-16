import { useState, useEffect, useRef } from "react";

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);
  const elRef = useRef(null);

  useEffect(() => {
    const onClickOutside = e => {
      if (elRef.current && !elRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    const debouncedClickOutside = debounce(onClickOutside, 100);

    if (isActive) {
      window.addEventListener("mousedown", debouncedClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", debouncedClickOutside);
    };
  }, [isActive]);

  return [isActive, setIsActive, elRef];
};

// Debounce helper function
const debounce = (fn, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};
