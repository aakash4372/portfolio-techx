import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Section1 from "./Mainfile/Section1";
import Footer from "./Pages/Footer";
import Case from "./Mainfile/Case";
import ScrollToTop from "./Mainfile/ScrollToTop"; // Import ScrollToTop component
import './App.css'

export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures scrolling to top on every route change */}
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/cases" element={<Case />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
