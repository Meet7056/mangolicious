import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import OrderHistory from "./pages/OrderHistory";
import Orders from "./pages/Orders";
import { Toaster } from "react-hot-toast";
import { useProducts } from "./context/ProductContext";

const Notfound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home")
  }, [])

  return;
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200); // Delay to ensure element is loaded
      }
    }
  }, [location]);

  return (
    <Scrollbar style={{ width: "100vw", height: "100vh" }}>
      <div className="application-container h-100" >
        <AnimatePresence mode="wait" className="h-100">
          <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
            <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
            <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
            <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
            <Route path="/order-history" element={<PageWrapper><OrderHistory /></PageWrapper>} />
            <Route path="/orders" element={<PageWrapper><Orders /></PageWrapper>} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Toaster />
    </Scrollbar>
  );
}

const PageWrapper = ({ children }) => {

  const { getData } = useProducts();
  const location = useLocation();

  useEffect(()=>{
    getData();
  },[location.pathname])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
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
