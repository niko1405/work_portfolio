import { images } from "./assets";
import { usePreloadImages } from "./hooks";

import { Navbar, MenuOverlay, ScrollDown, Navigation } from "./components";
import { About, Header, Contact, Work } from "./container";

const App = () => {
  usePreloadImages(Object.values(images));

  return (
    <div className="bg-[#011E3E] w-full overflow-hidden h-screen relative">
      <Navbar />
      <MenuOverlay />

      <div className="h-screen relative touch-none [transform:translate3d(0px,0px,0px)]">
        <Header />
        <About />
        <Work />
        <Contact />
      </div>

      <ScrollDown />
      <Navigation />
    </div>
  );
};

export default App;
