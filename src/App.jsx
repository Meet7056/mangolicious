import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/components.css"
import Menu from "./pages/Menu";
import { Scrollbar } from 'react-scrollbars-custom';

import "./pages/pages.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Scrollbar style={{ width: "100vw", height: "100vh" }}>
      <div className="application-container" >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Scrollbar>
  );
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <AnimatedRoutes />
    </Router>
  );
}
