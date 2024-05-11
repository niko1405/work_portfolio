import React from "react";
import { motion } from "framer-motion";

import AppWrap from "../wrapper/AppWrap";
import { PageHeader } from "../components";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center ss:pl-28 pl-4 pr-4 relative">
      <div className="absolute left-0 h-full w-28 mobile:hidden z-10 bg-[#011E3E]" />
      <div className="absolute flex justify-center mobile:items-start mobile:pt-[10rem] items-center w-screen h-screen pr-[2rem] ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 mobile:w-full relative"
        >
          <img
            src="./assets/images/WebDev.jpg"
            className="w-full h-auto shadow-2xl shadow-[#506b8a]"
          />
          <motion.div
            initial={{ width: "100%", opacity: 1 }}
            whileInView={{ width: 0, opacity: 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="top-0 left-0 absolute h-full bg-[#011E3E]"
          />
        </motion.div>
      </div>
      <div className="mobile:translate-y-[8rem]">
        <PageHeader
          title="My Work"
          text="A look into some of my works"
          btnText="Show me more"
          btnAction={() => {
            navigate("work");
          }}
        />
      </div>
    </div>
  );
};

export default AppWrap(Work, "work");
