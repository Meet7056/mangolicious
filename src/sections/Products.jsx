import React from 'react';
import { motion } from "framer-motion";
import CustomButton from '../components/CustomButton';
import cartImg from "../assets/icons/cart.svg";
import { Grid } from '@mui/material';
import image3 from "../assets/images/image3.png";

const items = [
    {
        image: image3,
        price: 1400,
        title: "Kesar Mangoes",
        desc: "Kesar Mangoes is known as “The Queen of Mangoes”"
    },
    {
        image: image3,
        price: 1400,
        title: "Kesar Mangoes",
        desc: "Kesar Mangoes is known as “The Queen of Mangoes”"
    },
    {
        image: image3,
        price: 1400,
        title: "Kesar Mangoes",
        desc: "Kesar Mangoes is known as “The Queen of Mangoes”"
    },
];

const Products = () => {
    return (
        <div>
            <div className='products-container'>

                {/* Title Animation - Only when in view */}
                <motion.div 
                    className='my-3'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} // Ensures animation runs only once
                >
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        Our Mango Varieties
                    </h1>
                </motion.div>

                <div className='products-items-container'>
                    <Grid container spacing={7} className="d-flex justify-content-center">
                        {items.map((item, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <motion.div
                                    className='products-item'
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.3 }} // Delay for each item
                                    viewport={{ once: true, amount: 0.2 }} // Starts animation when 20% is in view
                                >
                                    <div className='product-item-image-container'>
                                        <img
                                            style={{ maxWidth: 200 }}
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className='price-title-products-item'>
                                        <h5 className='yeseva fw-bold' style={{ fontSize: "22px" }}>
                                            {item.price} ₹
                                        </h5>
                                        <p className='ubuntu' style={{ fontSize: "18px" }}>
                                            {item.title}
                                        </p>
                                        <p className='opensans text-secondary' style={{ fontSize: "14px" }}>
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div style={{ padding: 10 }}>
                                        <CustomButton label={"ADD TO BASKET"} icon={cartImg} />
                                    </div>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Products;
