

import { useEffect, useState } from "react";

export default function useScreen() {
  const [dims, setDims] = useState({ w: 0, h: 0 });

  if (typeof window === "undefined") {
    return dims;
  }

  useEffect(() => {
    if (typeof window === "undefined") {
      return () => {};
    }

    let timer = null;

    const handleResize = () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setDims({ w: window.innerWidth, h: window.innerHeight });
      }, 200);
    };

    // Set initial dimensions
    setDims({ w: window.innerWidth, h: window.innerHeight });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, []);

  return dims;
}
