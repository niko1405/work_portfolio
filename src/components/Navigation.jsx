import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { navLinks } from "../constants";
import { setActiveAnchorTagAction } from "../features/settings/settingsActions";

let scrollTimeOut = false;

const Navigation = () => {
  const [lastY, setLastY] = useState(1000);

  const { activeAnchorTag } = useSelector((state) => state.settings);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hash } = useLocation();

  const handleScroll = (scroll_down) => {
    if (scrollTimeOut) return;
    let i = navLinks.findIndex((el) => el.id === activeAnchorTag) || 0;

    if (scroll_down) {
      if (i >= navLinks.length - 1) return;
      navigate(`#${navLinks[i + 1].id}`); //Scroll Down
    } else {
      if (i <= 0) return;
      navigate(`#${navLinks[i - 1].id}`); //Scroll Up
    }

    scrollTimeOut = true;

    setTimeout(() => {
      scrollTimeOut = false;
    }, 1 * 1000);
  };

  useEffect(() => {
    const handleWheelScroll = (event) => {
      handleScroll(event.deltaY > 0);
    };

    const handleTouchStart = (e) => {
      setLastY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      const currentY = e.changedTouches[0].clientY;
      if (Math.abs(currentY - lastY) < 30) return;

      handleScroll(lastY > currentY);
    };

    window.addEventListener("wheel", handleWheelScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeAnchorTag]);

  useEffect(() => {
    //safe new active anchor tag
    let i = navLinks.findIndex((el) => el.id === hash.split("#")[1]);

    if (i !== -1) {
      //valid hash
      dispatch(setActiveAnchorTagAction(navLinks[i].id));

      //scroll to anchor tag
      document.getElementById(navLinks[i].id).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [hash]);

  return (
    <div className="fixed ss:top-1/2 mobile:bottom-4 mobile:left-1/2 ss:-translate-y-[35%] mobile:-translate-x-1/2 ss:w-[40px] overflow-hidden ss:mx-7">
      <ul className="list-none p-0 m-0 flex ss:flex-col flex-row items-baseline">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`relative block ss:mb-7 ${
              i < navLinks.length - 1 ? "mobile:mr-7" : "mobile:mr-0"
            } ss:h-[2.5px] mobile:w-[2.5px]`}
          >
            <div
              onClick={() => navigate(`#${nav.id}`)}
              className={`${
                activeAnchorTag === `${nav.id}`
                  ? "ss:w-[35px] h-[35px]"
                  : "ss:w-[20px] h-[20px]"
              } ss:h-full w-full relative block ss:w-[24px] cursor-pointer duration-300 rounded-xl bg-white`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
