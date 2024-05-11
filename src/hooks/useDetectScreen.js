import { useEffect, useState } from "react";

const useDetectScreen = (
  mobile = 619,
  xs = 480,
  ss = 620,
  sm = 768,
  md = 1060,
  lg = 1200,
  xl = 1700
) => {
  const checkForDevice = () => {
    const screen = {
      mobile: false,
      xs: false,
      ss: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    };

    if (window.innerWidth <= mobile) {
      screen.mobile = true;
      if (window.innerWidth >= xs) screen.xs = true;
    } else if (window.innerWidth <= sm) screen.ss = true;
    else if (window.innerWidth <= md) screen.sm = true;
    else if (window.innerWidth <= lg) screen.md = true;
    else if (window.innerWidth <= xl) screen.lg = true;
    else screen.xl = true;

    return screen;
  };

  const [screen, setScreen] = useState(checkForDevice());

  useEffect(() => {
    const handlePageResized = () => {
      setScreen(checkForDevice());
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handlePageResized);
      window.addEventListener("orientationchange", handlePageResized);
      window.addEventListener("load", handlePageResized);
      window.addEventListener("reload", handlePageResized);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handlePageResized);
        window.removeEventListener("orientationchange", handlePageResized);
        window.removeEventListener("load", handlePageResized);
        window.removeEventListener("reload", handlePageResized);
      }
    };
  }, []);

  return screen;
};

export default useDetectScreen;
