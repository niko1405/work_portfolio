import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import AppWrap from "../wrapper/AppWrap";
import { PageHeader } from "../components";
import ContactForm from "../components/ContactForm";
import { setShowContactFormAction } from "../features/settings/settingsActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement(document.getElementById("root"));

const Contact = () => {
  const dispatch = useDispatch();

  const { showContactForm } = useSelector((state) => state.settings);

  const showContactModal = (value) => {
    dispatch(setShowContactFormAction(value));
  };

  return (
    <div className="w-full h-full flex items-center ss:pl-28 pl-4 pr-4 relative">
      <div className="absolute left-0 h-full w-28 z-10 bg-[#011E3E] mobile:hidden" />
      <div className="relative min-w-fit flex flex-col">
        <PageHeader
          title="Get In Touch"
          text="Feel free to contact me!"
          contact={true}
          btnText="Contact me"
          btnAction={() => showContactModal(true)}
        />

        <motion.div
          className="mt-4"
          initial={{ x: screen.mobile ? -150 : -200, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <a
            className="text-white text-md ml-5 font-semibold hover:opacity-80 hover:cursor-pointer"
            href={"mailto:nikolas.vix05@outlook.de"}
          >
            nikolas.vix05@outlook.de
          </a>
        </motion.div>
      </div>

      <ContactForm />

      <Modal
        isOpen={showContactForm}
        onRequestClose={() => showContactModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnEsc
      >
        <div className="z-20 bg-transparent relative w-screen h-screen flex justify-center items-center">
          <ContactForm modal showContactForm={showContactForm} />
          <div
            onClick={() => showContactModal(false)}
            className="w-full h-full bg-transparent absolute hover:cursor-pointer"
          />
        </div>
      </Modal>
    </div>
  );
};

export default AppWrap(Contact, "contact");
