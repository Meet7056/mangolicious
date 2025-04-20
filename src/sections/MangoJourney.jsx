import React from 'react'
import { Divider, Grid } from '@mui/material';
import journeyImg from "../assets/images/journeyImg.png";
import { motion } from "framer-motion";

const journey = [
    {
        title: "Growing",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "Our mangoes are grown in the lush, tropical climate where they receive plenty of sunlight and water, ensuring a rich, sweet flavor."
    },
    {
        title: "Harvesting",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "Once perfectly ripe, our expert farmers carefully handpick each mango to ensure only the best quality fruits are selected."
    },
    {
        title: "Sorting & Grading",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "The mangoes are sorted based on size, ripeness, and quality to ensure only premium mangoes make it to the next step."
    },
    {
        title: "Cleaning & Packaging",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "Each mango is thoroughly cleaned and carefully packed using eco-friendly packaging to maintain freshness and prevent damage."
    },
    {
        title: "Cold Storage",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "To preserve their freshness, the mangoes are stored in temperature-controlled environments before being dispatched."
    },
    {
        title: "Transportation",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "Our logistics team ensures that the mangoes are transported under optimal conditions, reaching their destination in perfect condition."
    },
    {
        title: "Delivery",
        image: "https://res.cloudinary.com/dvazdgyjw/image/upload/v1745130434/journey_1_cqdzdz.jpg",
        desc: "Finally, our mangoes arrive at your doorstep, ready to be enjoyed at peak freshness and flavor!"
    }
];


const MangoJourney = () => {
    return (
        <div>
            <div className='journey-container'>

                <div className='my-3'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        The Mango Journey
                    </h1>
                </div>

                <div className='journey-story-container'>
                    <div>

                        <div className='w-100 justify-content-start journey-devider'>
                            <div style={{ marginLeft: 13 }}>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{ borderStyle: "dashed", height: "60px", borderColor: "#DC752A", }}
                                />
                            </div>
                        </div>

                        {
                            journey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 0 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1}}
                                    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
                                >
                                    <div key={index}>
                                        <div className='single-journey-story'>

                                            <div className='w-100 journey-devider justify-content-start' style={{ position: 'absolute', top: 27 }}>
                                                <div style={{ marginLeft: 13, display: (index + 1) == journey.length && "none" }}>
                                                    <Divider
                                                        orientation="vertical"
                                                        flexItem
                                                        sx={{ borderStyle: "dashed", height: "110px", borderColor: "#DC752A", }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='journey-circle-highlight journey-devider'>
                                                <div className='journey-circle-highlight-dot'></div>
                                            </div>
                                            <div>
                                                <div className='journey-devider' style={{ marginTop: 10, }}>
                                                    <Divider
                                                        orientation="horizontal"
                                                        flexItem
                                                        sx={{ borderStyle: "dashed", width: "70px", borderColor: "#DC752A", opacity: 1 }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='journey-image-container' style={{ marginTop: -15 }}>
                                                <img
                                                    src={item.image}
                                                    style={{ maxWidth: 250, borderRadius: 20 }}
                                                />
                                            </div>
                                            <div className='ps-4'>
                                                <h3 className='yeseva mb-2' style={{ fontSize: "28px", color: "#DC752A" }}>
                                                    {item.title}
                                                </h3>
                                                <p className='opensans text-secondary p-1' style={{ maxWidth: 300, textAlign: 'justify', fontSize: 14 }}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <div className='w-100 journey-devider justify-content-start'>
                                            <div style={{ marginLeft: 13, display: (index + 1) == journey.length && "none" }}>
                                                <Divider
                                                    orientation="vertical"
                                                    flexItem
                                                    sx={{ borderStyle: "dashed", height: "100px", borderColor: "#DC752A", }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }


                    </div>
                </div>

            </div>
        </div>
    )
}

export default MangoJourney