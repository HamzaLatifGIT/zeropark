import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Home from "./components/pages/Home";
import Blog from "./components/pages/blog/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Brandandagencies from "./components/pages/Brand and Agencies/Brandandagencies";
import VerticalSlider from "./components/pages/Brand and Agencies/VerticalSlider";

// Reveal Animations
import Aos from "aos";
import 'aos/dist/aos.css'
import sal from 'sal.js';
import 'sal.js/dist/sal.css';


function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  useEffect(() => {
    sal({
      threshold: 0.5,
      once: true,
      duration: 600,
      easing: 'ease',
    }

    );
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Solution" element={<Brandandagencies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
