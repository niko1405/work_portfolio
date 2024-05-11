import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { useNotification } from "../context/NotificationProvider";

const ContactForm = ({ modal = false, showContactForm = false }) => {
  const notification = useNotification();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5a5xqas", "template_je9bhuf", form.current, {
        publicKey: "ramnO4Hfq_ulRkCOB",
      })
      .then(
        () => {
          notification.showNotification("success", "Email sent successfully!");

          document.getElementById("contactForm").reset();
        },
        (error) => {
          notification.showNotification("error", error);
        }
      );
  };

  if (modal) {
    return (
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{ width: "80%", height: "auto" }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="z-50 border rounded border-gray-800 bg-gray-900 flex flex-col p-4 relative justify-center max-w-[700px]"
      >
        <h2 className="contact mb-4 text-3xl tracking-tight font-extrabold text-center">
          Contact
        </h2>
        <form
          id="contactForm"
          ref={form}
          onSubmit={sendEmail}
          action="#"
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
              name="from_email"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-semibold text-center text-white rounded-lg hover:opacity-80"
          >
            Send message
          </button>
        </form>
      </motion.div>
    );
  } else {
    return (
      <section className="hidden contact:flex w-full h-full relative justify-center max-h-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="border rounded border-gray-800 absolute top-32 w-2/3 h-2/3 p-4 bg-gray-900"
        >
          <h2 className="contact mb-4 text-3xl tracking-tight font-extrabold text-center">
            Contact
          </h2>
          <form
            id="contactForm"
            ref={form}
            onSubmit={sendEmail}
            action="#"
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-400"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
                name="from_email"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-semibold text-center text-white rounded-lg hover:opacity-80 absolute bottom-1 left-1"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </section>
    );
  }
};

export default ContactForm;
