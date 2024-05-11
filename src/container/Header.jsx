import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import AppWrap from "../wrapper/AppWrap";
import { useDetectScreen } from "../hooks";

let ticker = 0;

const Header = () => {
  const screen = useDetectScreen();

  const textArray = [
    "Web Development",
    "Design",
    "Technology",
    "Problem Solving",
    "Business World",
    "Programming",
  ];
  const rubberMsg = "Hi! I'm Nikolas";

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [intervall, setIntervall] = useState(100);

  const { activeAnchorTag } = useSelector((state) => state.settings);

  useEffect(() => {
    if (activeAnchorTag == "home") resetText();
  }, [activeAnchorTag]);

  useEffect(() => {
    ticker = setInterval(() => {
      updateText();
    }, intervall);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const resetText = () => {
    setIsDeleting(false);
    setIntervall(100);
    setText("");
    setTextIndex(0);
  };

  const updateText = () => {
    if (activeAnchorTag == "home") {
      let fullText = textArray[textIndex];

      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        if (intervall !== 100) setIntervall(100);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIntervall(2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) =>
          prev < textArray.length - 1 ? textIndex + 1 : 0
        );
      }
    }
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="flex items-center h-full ss:pl-28 pl-4 pr-4 relative z-10">
        <div className="absolute left-0 h-full w-28 z-10 bg-[#011E3E] mobile:hidden" />
        <div className="flex flex-col">
          <motion.div
            className="flex flex-col w-full relative"
            initial={{ x: screen.mobile ? -200 : -300, opacity: 0 }}
            whileInView={{ x: 10, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-bold text-4xl ss:text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide flex flex-row">
              {rubberMsg.split("").map((char, i) =>
                char !== " " ? (
                  <p
                    key={i}
                    onMouseEnter={(e) =>
                      e.currentTarget.classList.add("rubberBand-animated")
                    }
                    onAnimationEnd={(e) =>
                      e.currentTarget.classList.remove("rubberBand-animated")
                    }
                    className="rubberBand"
                  >
                    {char}
                  </p>
                ) : (
                  <p key={i} className="w-4" />
                )
              )}
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col w-full relative"
            initial={{ x: screen.mobile ? -200 : -300, opacity: 0 }}
            whileInView={{ x: 10, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <span
              className="txt-rotate mt-3"
              dataperiod="1000"
              data-rotate={textArray}
            >
              <span className="pr-1 py-0 wrap text-gradient font-bold text-5xl ss:text-5xl sm:text-6xl lg:text-7xl tracking-wide">
                {text}
              </span>
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col w-32 mt-8"
            initial={{ x: screen.mobile ? -90 : -150, opacity: 1 }}
            whileInView={{ x: 10, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-20 h-[3px] bg-red-400 self-start mb-3" />
            <span className="w-20 h-[3px] bg-red-400 self-end" />
          </motion.div>
          <motion.div
            className="mt-7 flex flex-col"
            initial={{ x: screen.mobile ? -150 : -200, opacity: 1 }}
            whileInView={{ x: 10, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pl-1 pr-1 py-0 wrap text-white text-lg tracking-wide">
              Welcome to my portfolio!
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
