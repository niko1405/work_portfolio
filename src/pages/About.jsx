import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";

import { skillSetList1, skillSetList2 } from "../constants";
import { images } from "../assets";

const SkillSetBar = ({
  img_source = "",
  title = "",
  rating = "",
  percentage = "",
  containerStyles = "",
}) => {
  return (
    <div className={`${containerStyles} w-full h-14 flex flex-row relative`}>
      <div className="w-1/5 flex justify-center items-center relative p-2 mobile:p-0">
        <img src={img_source} className="w-fit h-fit" draggable={false} />
      </div>
      <div className="w-4/5 flex flex-col">
        <div className="flex flex-row justify-between relative">
          <div className="flex w-full flex-row justify-items-start">
            <p className="min-w-fit text-xl tracking-[.1rem] font-semibold font-truculenta text-gray-800">
              {title}
            </p>
            <p className="ml-3 text-lg tracking-[.1rem] font-semibold font-truculenta text-gray-600">
              {rating}
            </p>
          </div>
          <p className="min-w-fit text-xl tracking-[.1rem] font-semibold font-truculenta text-red-300">
            {percentage}
          </p>
        </div>
        <div
          className={`bg-white w-full h-5 mt-1 shadow-[0_5px_15px_0_rgba(7,33,66,0.15)] relative rounded-lg`}
        >
          <motion.div
            className="skill-set__bar__after"
            initial={{ width: 0 }}
            whileInView={{ width: percentage }}
            transition={{ duration: 2, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

const SkillSetCircularBar = ({ title, percentage }) => {
  const handleViewport = (inView) => {
    let barEl = document.getElementById(title);

    if (inView) barEl.classList.add("skill-bar__load");
    else barEl.classList.remove("skill-bar__load");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="progress"
      onViewportEnter={() => handleViewport(true)}
      onViewportLeave={() => handleViewport(false)}
    >
      <div
        className="bar"
        data-name="SVG Skill"
        data-percent={`${percentage}%`}
      >
        <svg viewBox="-10 -10 220 220">
          <g fill="none" strokeWidth="20" transform="translate(100,100)">
            <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)" />
            <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)" />
            <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)" />
            <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)" />
            <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)" />
            <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)" />
          </g>
        </svg>
        <svg viewBox="-10 -10 220 220">
          <path
            d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z"
            strokeDashoffset={Math.round(percentage * 0.01 * 629)}
            id={title}
          ></path>
        </svg>
      </div>

      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="cl1"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#072142" />
            <stop offset="100%" stopColor="#4e1844" />
          </linearGradient>
          <linearGradient
            id="cl2"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stopColor="#4e1844" />
            <stop offset="100%" stopColor="#8c2b7a" />
          </linearGradient>
          <linearGradient
            id="cl3"
            gradientUnits="objectBoundingBox"
            x1="1"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stopColor="#8c2b7a" />
            <stop offset="100%" stopColor="#8c2b50" className="bg-[#7c2e2e]" />
          </linearGradient>
          <linearGradient
            id="cl4"
            gradientUnits="objectBoundingBox"
            x1="1"
            y1="1"
            x2="0"
            y2="0"
          >
            {/* #c24848 */}
            <stop stopColor="#8c2b50" />
            <stop offset="100%" stopColor="#7c2e2e" />
          </linearGradient>
          <linearGradient
            id="cl5"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="1"
            x2="0"
            y2="0"
          >
            <stop stopColor="#7c2e2e" />
            <stop offset="100%" stopColor="#c24848" />
          </linearGradient>
          <linearGradient
            id="cl6"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop stopColor="#c24848" />
            <stop offset="100%" stopColor="#ff4d5a" />
          </linearGradient>
        </defs>
      </svg>
      <p className="text-xl tracking-[.1rem] font-semibold font-truculenta text-gray-800">
        {title}
      </p>
    </motion.div>
  );
};

const PassionSection = ({ img, title, text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className="w-1/3 h-full flex flex-col items-center mobile:mt-10 mr-4 relative mobile:w-full"
    >
      <img src={img} className="w-[45%] mobile:w-1/2" />
      <p className="mt-3 text-xl font-bold font-sono_bold text-white tracking-[.2rem] mobile:tracking-[.1rem] pl-6">
        {title}
      </p>
      <p className="text-lg font-truculenta tracking-wide text-[#fff] mt-2">
        {text}
      </p>
    </motion.div>
  );
};

const About = () => {
  const [backArrowColor, setBackArrowColor] = useState("#fff");
  const [scrollText, setScrollText] = useState("SCROLLDOWN");

  useEffect(() => {
    //handleBackArrow Color based on page
    const scrollListener = document.addEventListener("scroll", () => {
      let inBodyRelation = document.body.getBoundingClientRect().top;
      let scndPageEL = document.querySelector("#secondAboutPage");
      let thirdPageEL = document.querySelector("#thirdAboutPage");
      let fourthPageEL = document.querySelector("#fourthAboutPage");

      if (window.scrollY > 1200) setScrollText("SCROLL UP");
      else setScrollText("SCROLLDOWN");

      let isFirstPage =
        window.scrollY <=
        scndPageEL?.getBoundingClientRect()?.top - inBodyRelation - 40;

      let isThirdPage =
        window.scrollY >=
          thirdPageEL?.getBoundingClientRect()?.top - inBodyRelation - 40 &&
        window.scrollY <=
          fourthPageEL?.getBoundingClientRect()?.top - inBodyRelation - 40;

      if (isFirstPage || isThirdPage) setBackArrowColor("#fff");
      else setBackArrowColor("#000");
    });

    return () => {
      document.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="overflow-auto relative">
      <a className="back-arrow" href="./#home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="34"
          viewBox="0 0 67 34"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke={backArrowColor}
            strokeLinecap="round"
            transform="translate(2 1)"
          >
            <path strokeWidth="3" d="M0,15.5533333 L64,15.5533333"></path>
            <polyline
              strokeWidth="3"
              points="15.556 0 0 15.556 15.556 31.111"
            ></polyline>
          </g>
        </svg>
      </a>

      <div className="bg-[url('./assets/images/aboutImage2.jpg')] w-full h-screen flex relative bg-cover parallax-image">
        <div className="fixed flex flex-col items-center w-full top-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-5 wrap text-white font-bold text-5xl ss:text-5xl sm:text-[5rem] tracking-[.1em]"
          >
            About me
          </motion.div>
          <div className="flex flex-col w-[12rem]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[2px] bg-red-400 self-start mb-4"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-3/4 h-[2px] bg-red-400 self-end"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-5 wrap text-white text-lg tracking-wide"
          >
            I love new technologies and design
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="scrollDown text-xs font-truculenta"
        >
          {scrollText}
        </motion.div>
      </div>

      <div
        id="secondAboutPage"
        className="bg-[#e6dfcc] w-full min-h-screen flex flex-col relative"
      >
        <div className="w-full pl-2 pt-7 flex flex-row relative">
          <div className="w-1/3 max-w-[9rem] h-14 relative flex items-center">
            <div className="w-2/3 mobile:w-1/3 max-w-[4.8rem] bg-[#020b16] h-[2px] mr-3" />
            <p className="font-fatface font-bold text-3xl text-[#ff4d5a]">01</p>
          </div>
          <div className="w-2/3 h-14 flex items-center">
            <p className="text-3xl font-bold font-sono_bold tracking-[.5rem] mobile:tracking-[.1rem] pl-6 mobile:pl-0">
              WHO I AM
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-row mobile:flex-col relative pt-7">
          <div className="w-1/3 mobile:w-full h-full relative flex justify-center">
            <img src={images.Niko} width="80%" />
            <motion.div
              initial={{ width: "90%", opacity: 1 }}
              whileInView={{ width: 0, opacity: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="top-0 left-0 ml-9 mr-[-1.75rem] absolute h-full bg-gray-800"
            />
          </div>
          <div className="w-2/3 mobile:w-full pl-7 pr-7 flex flex-col relative mobile:mt-7 mobile:mb-6">
            <div className="w-fit">
              <p className="text-2xl font-truculenta font-bold tracking-wide text-gray-800 mb-1">
                NIKOLAS VIX
              </p>
              <div className="flex flex-col w-full relative mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "66%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-[2px] bg-gray-700 self-start mb-1"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "66%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-3/4 h-[2px] bg-gray-700 self-end"
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl font-truculenta tracking-wide text-gray-800"
            >
              {`Hi! My name is Nikolas, I'm ${
                parseInt(new Date().getFullYear()) - 2005
              } years old and since I was a child I had a passion for writing code and programming. I gained the majority of my knowledge in this area just by watching tutorials and through learning by doing. This involved hours of trying to solve certain problems and understand new technical concepts, where success in the end always motivated me to keep going. I've always been fascinated by the possibilities that can be achieved with just a few lines of code and how technology is impacting our daily life. My learning curve steadily increased and I was very determined to improve my coding skills as I kept reading and trying new things. Currently I'm studying business informatics at University of applied science and technology in Karlsruhe. I know that this is still the start of my journey and there's a lot more to learn which I'm really excited about!`}
            </motion.div>
          </div>
        </div>
      </div>

      <div
        id="thirdAboutPage"
        className="bg-[url('./assets/images/aboutImage3.jpg')] parallax-image bg-cover w-full min-h-screen flex flex-col relative"
      >
        <div className="w-full pl-2 pt-7 flex flex-row relative">
          <div className="w-1/3 max-w-[9rem] h-14 relative flex items-center">
            <div className="w-2/3 mobile:w-1/3 max-w-[4.8rem] bg-[#d6d6d6] h-[2px] mr-3" />
            <p className="font-fatface font-bold text-3xl text-[#ff4d5a]">02</p>
          </div>
          <div className="w-2/3 h-14 flex items-center">
            <p className="text-3xl font-bold font-sono_bold tracking-[.5rem] mobile:tracking-[.1rem] pl-6 mobile:pl-0 text-[#fff]">
              MY PASSION
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-row mobile:flex-col relative p-7 mobile:items-center mobile:pt-0">
          <PassionSection
            img={images.technology}
            title="Technology"
            text="Technology has the power to change the world and the lives of individuals. Almost every sector of our daily life is impacted by technology. I want to be able to keep up with the latest technology and be able to respond to change. I want to be a part of spreading new innovations and I believe that this is the mission of engineers."
          />
          <PassionSection
            img={images.problemSolving}
            title="Problem-Solving"
            text="Solving IT problems often involves creating innovative solutions, impacting the real-world which is highly motivating. I enjoy the challenges I am facing and therefore the opportunity for continuous learning and growth. On top of that comes the satisfaction of successfully overcoming obstacles and delivering effective solutions."
            delay={0.3}
          />
          <PassionSection
            img={images.businessWorld}
            title="Business World"
            text="The business world is a hotbed of innovation and creativity. Similar to IT, the business world requires a strong problem-solving mindset and this dynamic and constantly changing system offers ample opportunities for learning, personal growth, and skill development which I'm passionate about. Businesses have the potential to create significant impact, also in driving societal change and progress. Being part of this global transformative process and making a difference makes me really feel determined to learn more about it!"
            delay={0.6}
          />
        </div>
      </div>

      <div
        id="fourthAboutPage"
        className="bg-[#e6dfcc] w-full min-h-screen flex flex-col relative"
      >
        <div className="w-full pl-2 pt-7 flex flex-row relative">
          <div className="w-1/3 max-w-[9rem] h-14 relative flex items-center">
            <div className="w-2/3 mobile:w-1/3 max-w-[4.8rem] bg-[#020b16] h-[2px] mr-3" />
            <p className="font-fatface font-bold text-3xl text-[#ff4d5a]">03</p>
          </div>
          <div className="w-2/3 h-14 flex items-center">
            <p className="text-3xl font-bold font-sono_bold tracking-[.5rem] mobile:tracking-[.1rem] pl-6 mobile:pl-0">
              MY SKILLSET
            </p>
          </div>
        </div>

        <div className="w-full h-full flex flex-col relative p-7 mobile:items-center">
          <p className="text-xl font-bold font-sono_bold tracking-[.2rem] mobile:tracking-[.1rem] mb-5 text-gray-800">
            Language Skills
          </p>

          <div className="w-full justify-center relative flex flex-row mobile:flex-col">
            <SkillSetCircularBar
              title="German (first language)"
              percentage={100}
            />
            <SkillSetCircularBar title="English (fluently)" percentage={85} />
            <SkillSetCircularBar title="French" percentage={45} />
            <SkillSetCircularBar title="French" percentage={20} />
          </div>

          <p className="mt-10 text-xl font-bold font-sono_bold tracking-[.2rem] mobile:tracking-[.1rem] text-gray-800">
            IT-Skills
          </p>
          <div className="w-full h-full relative flex flex-row mobile:flex-col">
            <div className="w-1/2 mobile:w-full flex flex-col p-5">
              {skillSetList1.map((skillSet) => (
                <SkillSetBar
                  key={skillSet.title}
                  img_source={skillSet.img_source}
                  title={skillSet.title}
                  rating={skillSet.rating}
                  percentage={skillSet.percentage}
                  containerStyles="mt-5"
                />
              ))}
            </div>
            <div className="w-1/2 mobile:w-full flex flex-col p-5">
              {skillSetList2.map((skillSet) => (
                <SkillSetBar
                  key={skillSet.title}
                  img_source={skillSet.img_source}
                  title={skillSet.title}
                  rating={skillSet.rating}
                  percentage={skillSet.percentage}
                  containerStyles="mt-5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[15rem] about-footer flex justify-center items-center">
        <a
          className="text-white text-md ml-5 hover:opacity-80 hover:cursor-pointer font-sono_bold"
          href={"mailto:nikolas.vix05@outlook.de"}
        >
          nikolas.vix05@outlook.de
        </a>
        <div className="flex absolute bottom-1 right-1 flex-row items-center justify-center">
          <RiCopyrightLine color="white" size={14} />
          <p className="text-white font-sono_bold pl-1 uppercase text-sm">
            2024 Nikolas
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
