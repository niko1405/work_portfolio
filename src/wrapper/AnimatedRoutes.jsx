import { Route, Routes, useLocation } from "react-router-dom";

import Containers from "../components/Containers";
import About from "../pages/About";
import { Header } from "../container";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default AnimatedRoutes;
