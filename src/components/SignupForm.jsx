import React, { useState } from 'react'
import CustomButton from './CustomButton';
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
import { registerUser } from '../global/allApis';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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

const SignupForm = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        message: "",
        fullname: "",
        email: "",
    });
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        const { password, fullname, mobile_no } = formData;

        console.log({formData})

        if (!password || !fullname || !mobile_no) {
            toast.error("All fields are required!");
            return;
        }

        try {
            setLoading(true)
            const response = await registerUser(formData);
            if (response.message == "Registered Successfully") {
                toast.success(response.message);
                navigate("/login")
            } else {
                console.log({response})
                toast.error("Request failed!")
            }
            setLoading(false)
        } catch (error) {
            console.error({ error })
            setLoading(false)
        }
    }


    return (
        <div>
            <div className='review-container' style={{ minHeight: "calc(100vh - 72px)" }}>

                <div className='my-3'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        Sign Up
                    </h1>
                </div>

                <div className='fresh-farm-content-container'>
                    <div className='fresh-farm-map-container'>
                        <img
                            src={contactimage}
                            style={{ maxWidth: 500, width: "100%" }}
                        />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div style={{ maxWidth: 400, justifyContent: "center", display: "flex", flexDirection: "column" }}>

                            <div className='d-flex flex-column gap-3 login-form-fields-container'>
                                <CustomInput
                                    label="Your full name"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleInputChange}
                                    placeholder="Enter Full Name"
                                />
                                <CustomInput
                                    label="Your Phone"
                                    name="mobile_no"
                                    value={formData.mobile_no}
                                    onChange={handleInputChange}
                                    type="number"
                                    placeholder="Enter Phone number"
                                />
                                <CustomInput
                                    label="Your Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your passoword"
                                    type="password"
                                    link="/login"
                                    notewithlink="Do you have an account?"
                                />
                            </div>

                            <div className="d-flex mt-5 justify-content-center">
                                <CustomButton loading={loading} label={"SUBMIT"} role="button" onClick={handleSubmit} type={'submit'} icon={snendImg} />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='review-image' style={{ position: 'absolute', right: 0, top: 30 }}>
                    <img
                        style={{ maxWidth: 150 }}
                        src={image4}
                    />
                </div>

            </div>
        </div >
    )
}

export default SignupForm