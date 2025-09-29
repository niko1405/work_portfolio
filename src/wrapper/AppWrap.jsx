import React, { useEffect } from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { images } from "../assets";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    useEffect(() => {
      const handleMouseMove = (e) => {
        const parallaxEL = document.getElementById(`parallax_bg_${idName}`);

        const ivalueX = (e.pageX * -1) / 80;
        const ivalueY = (e.pageY * -1) / 80;

        parallaxEL.style.transform = `translate3d(${ivalueX}px,${ivalueY}px, 0)`;
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <div
        id={idName}
        className={`w-full min-h-screen bg-[url('./assets/images/tech-wallpaper.jpeg')] bg-contain bg-no-repeat bg-right noDesktop:bg-center noDesktop:bg-cover flex flex-row relative ${classNames}`}
      >
        <div className="w-screen h-screen absolute flex opacity-40">
          <img
            id={`parallax_bg_${idName}`}
            src={images.bgParallax}
            className="absolute top-[20%] right-[27%] h-2/3 w-auto mobile:top-[25%] mobile:right-0 mobile:h-1/2"
          />
        </div>
        <div className="flex-1 w-full flex-col flex justify-center items-center relative">
          <Component active={idName} />
          <div className="ss:flex hidden absolute bottom-1 right-1 flex-row items-center justify-center">
            <RiCopyrightLine color="gray" size={14} />
            <p className="text-gray-500 pl-1 uppercase text-[10px]">
              {`${new Date().getFullYear().toString()} `} Nikolas
            </p>
          </div>
        </div>
      </div>
    );
  };

export default AppWrap;
