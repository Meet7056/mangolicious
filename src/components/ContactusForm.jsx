import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import snendImg from "../assets/icons/send.svg";
import { Grid } from '@mui/material';
import image4 from "../assets/images/image4.png";
import contactimage from "../assets/images/contactimage.png";
import girl1 from "../assets/images/girl1.png";
import quotesImg from "../assets/icons/quotes.svg";
import { Send, Star, StarOutline } from '@mui/icons-material';

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from 'swiper';
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import CustomInput from './CustomInput';
import CustomTextarea from './CustomTextarea';

const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div className="d-flex gap-1" style={{ color: "#DC752A" }}>
            {[...Array(totalStars)].map((_, index) =>
                index < rating ? <Star key={index} /> : <StarOutline key={index} />
            )}
        </div>
    );
};

const Reviews = () => {

    const [formData, setFormData] = useState({
        message: "",
        name: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log({ formData })
    }


    return (
        <div>
            <div className='review-container'>

                <div className='my-3'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        Drop Us a Line
                    </h1>
                </div>

                <div className='fresh-farm-content-container'>
                    <form onSubmit={handleSubmit}>
                        <div style={{ maxWidth: 400, justifyContent: "center", display: "flex", flexDirection: "column" }}>

                            <div className='d-flex flex-column gap-3'>
                                <CustomInput
                                    label="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                />
                                <CustomInput
                                    label="Your Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter Phone number"
                                />
                                <CustomTextarea
                                    label="Your message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Enter your message"
                                    name="message"
                                />
                            </div>

                            <div className="d-flex mt-5">
                                <CustomButton label={"CONTACT US"} role="button" onClick={handleSubmit} type={'submit'} icon={snendImg} />
                            </div>
                        </div>
                    </form>
                    <div className='fresh-farm-map-container'>
                        <img
                            src={contactimage}
                            style={{ maxWidth: 500, width: "100%" }}
                        />
                    </div>
                </div>

                <div className='review-image' style={{ position: 'absolute', right: 0, top: 30 }}>
                    <img
                        style={{ maxWidth: 150 }}
                        src={image4}
                    />
                </div>

                <div className='review-image' style={{ position: 'absolute', left: 0, bottom: 30 }}>
                    <img
                        style={{ maxWidth: 150, transform: "scaleX(-1)" }}
                        src={image4}
                    />
                </div>
            </div>
        </div >
    )
}

export default Reviews