import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import CustomButton from '../components/CustomButton';
import rightarrow from "../assets/icons/rightarrow.svg"
import { Link, useLocation } from 'react-router-dom';
import AboutusJounery from '../sections/AboutusJounery';
import Specialities from '../sections/Specialities';
import FreshFarmTitle from '../sections/FreshFarmTitle';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import Products from '../sections/Products';
import VideoSection from '../sections/VideoSection';

const Menu = () => {

  return (
    <div>
      <Navbar />

      <div id='page-1'>
        <div className='d-flex'>
          <div className="home-container-2" style={{ justifyContent: 'center', alignItems: "center" }}>
            <div className='about-us-image-container'>
              <img
                src={image8}
                className='w-100'
              />

              <motion.div
                initial={{ y: 0 }} // Start position
                animate={{ y: [0, -20, 0] }} // Move up and down
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Smooth infinite animation
                style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
              >
                <img src={image9} className="w-100" alt="Floating" />
              </motion.div>
            </div>
          </div>

          <div className="home-container-1 about-us-heading" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <motion.div
              className="about-us-heading-container"
              initial={{ opacity: 0, x: 100 }} // Start off-screen (right)
              animate={{ opacity: 1, x: 0 }} // Slide in
              transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            >
              <h1 className="yeseva" style={{ color: "#DC752A", fontSize: "60px" }}>
                Menu
              </h1>

              <p className="text-secondary opensans fs-6" style={{ textAlign: "justify", lineHeight: 2 }}>
                At Mangolicious, we bring you the freshest, juiciest, and most flavorful mangoes, grown with love and care.
              </p>

              <div className="d-flex mt-5">
                <Link to={"/contact"}>
                  <CustomButton label={"CONTACT US"} icon={rightarrow} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div id='page-2'>
        <Products />
      </div>

      <div id='page-3'>
        <VideoSection />
      </div>

      <div id='page-4'>
        <Footer />
      </div>

    </div>
  )
}

export default Menu