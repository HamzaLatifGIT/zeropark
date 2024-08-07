import { useState } from "react";

// Components
import Home from "./components/pages/Home";
import Blog from "./components/pages/blog/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
