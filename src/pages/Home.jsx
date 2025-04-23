import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import image1 from "../assets/images/image.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import CustomButton from '../components/CustomButton';
import cartImg from "../assets/icons/cart.svg";
import { Divider, Grid } from '@mui/material';
import Products from '../sections/Products';
import bgImgJourney from "../assets/images/bgImgJourney.svg";
import journeyImg from "../assets/images/journeyImg.png";
import MangoJourney from '../sections/MangoJourney';
import Reviews from '../sections/Reviews';
import VideoSection from '../sections/VideoSection';
import Specialities from '../sections/Specialities';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Home = () => {

  const [sale, setSale] = useState(true);

  return (
    <div style={{ height: '100vh' }} className='bg-dark'>
      <Navbar />

      <div id='page-1' style={{ position: "relative" }}>
        <div className='d-flex' >
          <div className="home-container-1">
            <motion.div
              className='w-100 pt-5'
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className='yeseva home-page-heading'>
                Farm-Fresh <span style={{ color: "#DC752A" }}>Mangoes,</span> Bursting with Flavor!
              </h1>
              <h1 className='yeseva mt-3' style={{ fontSize: "35px", color: "#0F8323" }}>
                <span style={{ color: "#DC752A" }}>100%</span> Natural
              </h1>
            </motion.div>

            <Link to={"/home#page-2"}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {
                  sale ?
                    <div style={{ position: "relative", paddingLeft: 80 }}>

                      <div style={{ position: "relative" }}>

                        <img
                          src={"https://res.cloudinary.com/dvazdgyjw/image/upload/v1745338481/24506167046-removebg-preview_tcuxbf.png"}
                          style={{ maxHeight: 160 }}
                        />

                        <div style={{ position: 'absolute', top: 63, left: 57 }}>
                          <h2 className='yeseva text-white' style={{ fontSize: 35 }}>
                            99%
                          </h2>
                        </div>
                      </div>

                      <div style={{ position: "absolute", left: -20, top: -35 }}>

                        <img
                          src={"https://res.cloudinary.com/dvazdgyjw/image/upload/v1745337316/lovepik-mango-splashing-png-image_401631333_wh1200-removebg-preview_heutaw.png"}
                          style={{ maxHeight: 200 }}
                        />
                      </div>
                    </div>
                    :
                    <img
                      src={image1}
                      style={{ maxHeight: 150 }}
                    />
                }
              </motion.div>
            </Link>
          </div>
          <div className="home-container-2">
            <div className='image-2-cotainer'>
              <motion.img
                src={"https://res.cloudinary.com/dvazdgyjw/image/upload/v1745259816/Group_3_fuiyxp.png"}
                style={{ width: "100%", height: "100%", maxWidth: "calc(100vh - 80px)" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                alt="Mango Farm"
              />
            </div>
          </div>
        </div>

        {/* <div style={{ top: 0, left: 0, position:"absolute", width:"100%", backgroundColor:"#eea46e" }} className='d-flex p-3 px-4'>
          <h5>FLASH SALE</h5>
        </div> */}
      </div>

      <div id='page-2'>
        <Products />
      </div>

      <div id='page-3'>
        <MangoJourney />
      </div>


      <div id='page-4'>
        <Reviews />
      </div>

      <div id='page-5'>
        <VideoSection />
      </div>

      <div id='page-6'>
        <Specialities />
      </div>

      <div id='page-7'>
        <Footer />
      </div>

    </div >
  )
}

export default Home