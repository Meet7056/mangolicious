import React, { useEffect, useRef, useState } from 'react';
import CustomButton from '../components/CustomButton';
import cartImg from "../assets/icons/cart.svg";
import { Grid } from '@mui/material';
import image3 from "../assets/images/image3.png";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '../components/Navbar';
import { useProducts } from '../context/ProductContext';
import { addOrder, viewProducts } from '../global/allApis';
import toast from 'react-hot-toast';

const items = [
    {
        id: 1,
        image: image3,
        price: 1400,
        title: "Kesar Mangoes",
        desc: "Kesar Mangoes is known as “The Queen of Mangoes”",
        quantity: 1
    },
    {
        id: 2,
        image: image3,
        price: 1400,
        title: "Kesar Mangoes",
        desc: "Kesar Mangoes is known as “The Queen of Mangoes”",
        quantity: 1
    },
    {
        id: 3,
        image: image3,
        price: 1400,
        title: "Kesar Mangoes",
        desc: "Kesar Mangoes is known as “The Queen of Mangoes”",
        quantity: 1
    },
];

const SingleProduct = ({ item, index, handleRemoveFromCart, buttonRef, handleAddToCart, products }) => {

    const isAdded = products.find((product) => item.id === product.mango_id);

    return (
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
                    src={image3}
                    alt={"image"}
                />
            </div>

            <div className='price-title-products-item'>
                <h5 className='yeseva fw-bold' style={{ fontSize: "22px" }}>
                    {item.price} ₹
                </h5>
                <p className='ubuntu' style={{ fontSize: "18px" }}>
                    {item.type}
                </p>
                <p className='opensans text-secondary' style={{ fontSize: "14px" }}>
                    {item.desc || "The Queen of Mangoes"}
                </p>
            </div>

            <div style={{ padding: 10 }}>
                <CustomButton ref={buttonRef} onClick={() => {
                    if (isAdded) {
                        handleRemoveFromCart(item)
                    } else {
                        handleAddToCart(item)
                    }
                }} label={isAdded ? "REMOVE FROM BASKET" : "ADD TO BASKET"} icon={cartImg} />
            </div>
        </motion.div>

    )
}

const Products = () => {

    const buttonRef = useRef(null);

    const [animateCart, setAnimateCart] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [startPos, setStartPos] = useState({ top: 0, left: 0 });
    const { addProduct, removeProduct, products } = useProducts();

    const handleAddToCart = async (item) => {


        const user_id = localStorage.getItem("userid");

        if (!user_id) {
            toast.error("Please login to your account!")
            return;
        }

        addProduct(item)
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setStartPos({ top: rect.top, left: rect.left });
            setAnimateCart(true);
            setShowNav(true);

            setTimeout(() => {
                setAnimateCart(false);
            }, 1000);

            setTimeout(() => {
                setShowNav(false);
            }, 1500);
        }
    };

    const [data, setdata] = useState([]);

    const getData = async () => {
        const response = await viewProducts();

        if (response.data.length > 0) {
            setdata(response.data);
        } else {
            setdata([])
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const handleRemoveFromCart = (item) => {
        removeProduct(item);
        setShowNav(true);
        setTimeout(() => {
            setShowNav(false);
        }, 1500);
    };

    console.log({products, data})

    return (
        <div>
            <div className='products-container p-0' style={{ position: 'relative' }}>

                <div className='products-animated-navbar' style={{ opacity: showNav && 1 }}>
                    <Navbar />
                </div>

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
                        {data.map((item, index) => (
                            <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                                <SingleProduct handleRemoveFromCart={handleRemoveFromCart} products={products} handleAddToCart={handleAddToCart} item={item} index={index} buttonRef={buttonRef} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>

            <AnimatePresence>
                {animateCart && (
                    <motion.img
                        src={image3}
                        initial={{
                            top: startPos.top,
                            right: startPos.right,
                            scale: 0,
                            opacity: 0,
                            position: "fixed",
                        }}
                        animate={{
                            top: 0,
                            right: 50,
                            scale: 1,
                            opacity: 1,
                            transition: {
                                top: { type: "spring", stiffness: 300, damping: 20 },
                                right: { type: "spring", stiffness: 300, damping: 20 },
                                scale: { type: "tween", duration: 0.4, ease: "easeOut" },
                                opacity: { duration: 0.2 }
                            },
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                            transition: { duration: 0.3 }
                        }}
                        style={{ width: 100, zIndex: 9999 }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Products;
