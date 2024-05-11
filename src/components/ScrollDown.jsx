import React from "react";
import { useSelector } from "react-redux";

import { navLinks } from "../constants";

const ScrollDown = () => {
  const { activeAnchorTag } = useSelector((state) => state.settings);

  const show = activeAnchorTag === navLinks[0].id;

  return (
    <div
      className={`fixed left-1/2 ss:bottom-[10px] bottom-[70px] m-auto translate-x-1/2 ${
        show
          ? "translate-y-[0%] opacity-100"
          : "ss:translate-y-[180%] mobile:opacity-0"
      } transition-all duration-500`}
      id="mouse-scroll"
    >
      <div className="mouse">
        <div className="mouse-in"></div>
      </div>
      <div>
        <span className="down-arrow-1"></span>
        <span className="down-arrow-2"></span>
        <span className="down-arrow-3"></span>
      </div>
    </div>
  );
};

export default ScrollDown;
