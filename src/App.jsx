import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Featured from "./components/Featured";
import IceCreamServices from "./components/IceCreamServices";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

const Home = () => (
  <>
    <Carousel />
    <About />
    <Featured />
    <IceCreamServices />
    <Testimonial />
    <Contact />
  </>
);

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<IceCreamServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
