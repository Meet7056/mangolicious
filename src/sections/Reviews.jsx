import React from 'react'
import CustomButton from '../components/CustomButton';
import cartImg from "../assets/icons/cart.svg";
import { Grid } from '@mui/material';
import image4 from "../assets/images/image4.png";
import girl1 from "../assets/images/girl1.png";
import quotesImg from "../assets/icons/quotes.svg";
import { Star, StarOutline } from '@mui/icons-material';

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from 'swiper';
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const reviews = [
    {
        image: girl1,
        review: 'I ordered from Mangolicious, and I have to say, these are the freshest, juiciest mangoes I’ve ever had! The natural sweetness is unbeatable.',
        rating: 4,
        name: "Celia Almeda",
        role: "CEO of Company"
    },
    {
        image: girl1,
        review: "Absolutely loved the mangoes! They were perfectly ripe and tasted like they were just picked from the tree. Highly recommended!",
        rating: 5,
        name: "Sophia Reynolds",
        role: "Food Blogger"
    },
    {
        image: girl1,
        review: "Good quality mangoes, but I expected them to be a bit sweeter. Still, great service and fast delivery!",
        rating: 3,
        name: "Michael Carter",
        role: "Chef"
    },
    {
        image: girl1,
        review: "Hands down the best mangoes I’ve ever had! I can't stop ordering from here. Worth every penny!",
        rating: 5,
        name: "Emma Johnson",
        role: "Fitness Coach"
    },
    {
        image: girl1,
        review: "The mangoes were fresh, but some were slightly bruised. Overall, a good experience but could be improved.",
        rating: 4,
        name: "Daniel Lee",
        role: "Entrepreneur"
    },
    {
        image: girl1,
        review: "A delightful experience! The mangoes were delicious, and the customer service was excellent. Will order again!",
        rating: 5,
        name: "Olivia Martinez",
        role: "Health Enthusiast"
    },
];

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
    return (
        <div>
            <div className='review-container'>

                <div className='my-3'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        Read Our Reviews
                    </h1>
                </div>

                <div className="review-items-container">
                    <Swiper
                        slidesPerView={3} // Show 3 reviews at a time
                        spaceBetween={20} // Space between slides
                        pagination={{ clickable: true }}
                        // navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1 }, // Mobile: 1 review per slide
                            768: { slidesPerView: 2 }, // Tablet: 2 reviews per slide
                            1024: { slidesPerView: 3 }, // Desktop: 3 reviews per slide
                        }}
                        autoplay={{
                            delay: 3000, // Time between slide changes (in ms)
                            disableOnInteraction: false, // Keeps autoplay running after user interaction
                          }}
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="review-item">
                                    <div>
                                        <img src={quotesImg} style={{ maxWidth: 20 }} />
                                    </div>

                                    <div>
                                        <p style={{ fontStyle: "italic", fontSize: "1rem" }} className="text-secondary opensans">
                                            {item.review}
                                        </p>
                                    </div>

                                    <StarRating rating={item.rating} />

                                    <div className="d-flex gap-2 mt-2">
                                        <div>
                                            <img className="border" src={item.image} style={{ maxWidth: 50, borderRadius: 100 }} />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "1rem" }} className="text-dark ubuntu">
                                                {item.name}
                                            </p>
                                            <p style={{ fontSize: "0.9rem" }} className="text-secondary opensans">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
        </div>
    )
}

export default Reviews