import { useRef } from "react";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const NotificationContext = createContext();

let timeoutId;

const NotificationProvider = ({ children }) => {
  const notificationRef = useRef();

  const [notification, setNotification] = useState({
    type: "",
    value: "",
  });
  const [backgroundColor, setBackgroundColor] = useState("bg-red-400");

  const showNotification = (type, value) => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!type || !value) return;

    switch (type) {
      case "error":
        setBackgroundColor("bg-red-400");
        break;
      case "warning":
        setBackgroundColor("bg-orange-400");
        break;
      case "success":
        setBackgroundColor("bg-green-400");
        break;
      default:
        setBackgroundColor("bg-red-400");
        break;
    }

    setNotification({ type, value });

    timeoutId = setTimeout(() => {
      setNotification({ type: "", value: "" });
    }, 3000);
  };

  useEffect(() => {
    notificationRef.current?.classList.remove("bottom-14", "opacity-0");
    notificationRef.current?.classList.add("bottom-10", "opacity-1");
  }, [notification.value]);

  return (
    <>
      <NotificationContext.Provider value={{ showNotification }}>
        {children}
      </NotificationContext.Provider>
      {notification.value ? (
        <p
          ref={notificationRef}
          className={`${backgroundColor} transition-all duration-150 ease-linear rounded p-2 text-white fixed bottom-14 opacity-0 left-1/2 -translate-x-1/2 font-semibold z-50`}
        >
          {notification.value}
        </p>
      ) : null}
    </>
  );
};

export const useNotification = () => useContext(NotificationContext);

export default NotificationProvider;
