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

const About = () => {

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
                About Us
              </h1>

              <p className="text-secondary opensans fs-6" style={{ textAlign: "justify", lineHeight: 2 }}>
                Enjoy the juiciest, most flavorful mangoes, knowing you're getting nature's best, delivered with trust!
              </p>

              <div className="d-flex mt-5">
                <Link to={"/menu"}>
                  <CustomButton label={"VIEW ALL PRODUCTS"} icon={rightarrow} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div id='page-2'>
        <AboutusJounery />
      </div>

      <div id='page-3'>
        <Specialities />
      </div>

      <div id='page-4'>
        <FreshFarmTitle />
      </div>

      <div id='page-5'>
        <Footer />
      </div>

    </div>
  )
}

export default About