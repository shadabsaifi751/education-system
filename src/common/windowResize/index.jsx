import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    let resizeTimeout;

    function handleResize() {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
        });
      }, 100); // Adjust the debounce delay as needed (e.g., 100ms)

    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
