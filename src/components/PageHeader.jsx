import { motion } from "framer-motion";

import { useDetectScreen } from "../hooks";

const PageHeader = ({
  title = "",
  text = "",
  btnText = "",
  btnAction = () => {},
  contact = false,
}) => {
  const screen = useDetectScreen();

  return (
    <div className="pl-2 flex flex-col">
      <motion.div
        className="flex flex-col h-32 w-full relative justify-center"
        initial={{ x: screen.mobile ? -150 : -300, opacity: 0 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <span className="pr-1 py-0 wrap text-white font-bold text-4xl ss:text-5xl sm:text-6xl lg:text-7xl tracking-[.1em]">
          {title}
        </span>
      </motion.div>
      <motion.div
        className="flex flex-col w-32"
        initial={{ x: screen.mobile ? -80 : -150, opacity: 1 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <span className="w-20 h-[3px] bg-red-400 self-start mb-3" />
        <span className="w-20 h-[3px] bg-red-400 self-end" />
      </motion.div>
      <motion.div
        className="mt-5 flex flex-col"
        initial={{ x: screen.mobile ? -150 : -200, opacity: 1 }}
        whileInView={{ x: 10, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="pr-1 py-0 wrap text-white text-lg tracking-wide">
          {text}
        </span>
      </motion.div>
      {btnText.length > 0 && (
        <motion.div
          className={`mt-7 flex-col w-36 ${
            contact ? "contact:hidden" : "flex"
          }`}
          initial={{ x: screen.mobile ? -150 : -200, opacity: 1 }}
          whileInView={{ x: 10, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <button
            className="relative slide-btn text-white rounded-2xl py-2 px-3 text-xs before:bg-gradient-to-r from-[#be7f7f] to-[#6838f1]"
            onClick={btnAction}
          >
            {btnText}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PageHeader;
