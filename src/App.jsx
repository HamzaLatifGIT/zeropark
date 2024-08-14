import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Home from "./components/pages/Home";
import Blog from "./components/pages/blog/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Brandandagencies from "./components/pages/Brand and Agencies/Brandandagencies";
import BlogDetails from "./components/pages/blog/BlogDetails";

// Reveal Animations
import Aos from "aos";
import 'aos/dist/aos.css'


function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      delay: 100,
    });
  
    
    setTimeout(() => {
      Aos.refresh();
    }, 500); 
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogDetails />} />
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/Solution" element={<Brandandagencies />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
