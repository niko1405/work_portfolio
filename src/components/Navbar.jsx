import React from "react";
import { BsGithub } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { navLinks } from "../constants";
import { setToggleMenuAction } from "../features/settings/settingsActions";
import { setShowContactFormAction } from "../features/settings/settingsActions";
import { images } from "../assets";

const Navbar = ({ navigation = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { toggleMenu, activeAnchorTag, showContactForm } = useSelector(
    (state) => state.settings
  );

  const handleContact = () => {
    dispatch(setShowContactFormAction(true));
  };

  return (
    <nav
      className={`w-full flex pl-4 pr-7 py-5 justify-between items-center navbar fixed ${
        showContactForm ? "" : "z-20"
      } xl:max-w-[1280px]`}
    >
      <a href="./#home" className="text-white text-sm tracking-[.1em]">
        Nikolas Vix
      </a>

      <div className="ss:flex flex-row hidden items-center justify-between">
        {navigation && (
          <ul className="list-none justify-end flex items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-white ${
                  index === navLinks.length - 1 ? `mr-0` : `mr-6`
                }`}
              >
                <a
                  className={`relative hover-underline-animation text-xs hover:opacity-80 tracking-[.1em] transition-all duration-300 ${
                    activeAnchorTag === nav.id ? "font-bold" : ""
                  }`}
                  href={`#${nav.id}`}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="ml-5 flex flex-row items-center justify-between">
          <a
            href="https://www.instagram.com/"
            target="#"
            className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border hover:border-white border-gray-400 mr-2"
          >
            <img src={images.instaLogo} className="h-6 w-6" />
          </a>
          <a
            href="https://www.github.com/"
            target="#"
            className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border hover:border-white border-gray-400"
          >
            <BsGithub color="white" size={15} />
          </a>
        </div>
        <button
          className="relative slide-btn text-white rounded-2xl py-2 px-3 ml-4 text-xs before:bg-gradient-to-r from-[#eb8080] to-[#6838f1]"
          onClick={handleContact}
        >
          Contact me
        </button>
      </div>

      <div className="hidden mobile:flex flex-1 justify-end items-center">
        <svg
          className={`ham hamRotate ham7 ${toggleMenu ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={() => dispatch(setToggleMenuAction(!toggleMenu))}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
