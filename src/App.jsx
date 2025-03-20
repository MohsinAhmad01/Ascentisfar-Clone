import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About us/About";
import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services/Services";
import Market from "./pages/Market/Market";
import Products from "./pages/Finished product/Products";
import Integredents from "./pages/Active integredents/Integredents";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default page */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Integredents" element={<Integredents />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer always visible */}
    </Router>
  );
};

export default App;
