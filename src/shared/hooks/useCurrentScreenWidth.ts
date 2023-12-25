import { useState, useEffect } from "react";

import { getCurrentScreenWidth } from "../utils";

export const useCurrentScreenWidth = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(() =>
    getCurrentScreenWidth()
  );

  const resizeHandler = () => {
    setCurrentScreenWidth(getCurrentScreenWidth());
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { currentScreenWidth };
};
