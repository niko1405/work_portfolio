import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { navLinks } from "../constants";
import { setToggleMenuAction } from "../features/settings/settingsActions";

const MenuOverlay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { toggleMenu } = useSelector((state) => state.settings);

  const handleNavigation = (location) => {
    navigate(location);

    dispatch(setToggleMenuAction(false));
  };

  if (toggleMenu) {
    return (
      <nav
        className={`fixed flex flex-col top-0 left-0 w-full p-10 z-10 h-screen pt-24 menu-overlay bg-opacity-100 transform delay-100 transition-all duration-300 ${
          toggleMenu
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } justify-between items-center pb-[3rem]`}
      >
        <ul className="flex flex-col items-start mt-10">
          {navLinks.map((nav, i) => (
            <li
              key={nav.id}
              className="flex leading-8 list-none focus:outline-none group my-4 tracking-normal"
            >
              <div
                className="menu-link-container relative"
                onClick={() => handleNavigation(`#${nav.id}`)}
              >
                <div
                  data-delay={(i + 1) / 6}
                  className="menu-link h-full w-full text-4xl pt-2 text-white relative font-truculenta font-bold tracking-widest"
                >
                  {nav.title.toUpperCase()}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: 3,
                    }}
                    className="absolute h-[1px] left-1/2 bottom-[-4px] bg-white translate-x-[-50%]"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="menu-text-slide"
        >
          <div className="menu-text-marquee">
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white mr-1">
              {
                "Hello and welcome to my portfolio! Have a beautiful day :) Feel free to contact me at nikolas.vix05@outlook.de!"
              }
            </p>
            <p className="text-2xl font-truculenta font-bold tracking-wide text-white">
              {
                "Hello and welcome to my portfolio! Have a beautiful day :) Feel free to contact me at nikolas.vix05@outlook.de!"
              }
            </p>
          </div>
        </motion.div>
      </nav>
    );
  } else return <></>;
};

export default MenuOverlay;
