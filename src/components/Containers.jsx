import { About, Header, Skills, Work } from "../container";

const Containers = () => {
  return (
    <div className="h-full relative touch-none [transform:translate3d(0px,0px,0px)]">
      <Header />
      <About />
      <Work />
      <Skills />
    </div>
  );
};

export default Containers;
