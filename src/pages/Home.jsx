import React from 'react'
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

const Home = () => {
  return (
    <div style={{ height: '100vh' }} className='bg-dark'>
      <Navbar />

      <div id='page-1'>
        <div className='d-flex'>
          <div className='home-container-1'>
            <div className='w-100 pt-5'>
              <h1 className='yeseva' style={{ fontSize: "50px" }}>
                Farm-Fresh <span style={{ color: "#DC752A" }}>Mangoes,</span> Bursting with Flavor!
              </h1>
              <h1 className='yeseva mt-3' style={{ fontSize: "35px", color: "#0F8323" }}>
                <span style={{ color: "#DC752A" }}>100%</span> Natural
              </h1>
            </div>

            <div>
              <img
                src={image1}
                style={{ maxHeight: 150 }}
              />
            </div>
          </div>
          <div className='home-container-2'>
            <div className='image-2-cotainer'>
              <img
                src={image2}
                style={{ width: "100%", height: "100%", maxWidth: "calc(100vh - 80px)" }}
              />
            </div>
          </div>
        </div>
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
      
    </div>
  )
}

export default Home