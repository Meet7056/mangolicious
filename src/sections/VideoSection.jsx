import React from 'react'
import { Divider, Grid } from '@mui/material';
import journeyImg from "../assets/images/journeyImg.png";
import VideoPlayer from '../components/VideoComponent';

const journey = [
    {
        title: "Growing",
        image: journeyImg,
        desc: "Our mangoes are grown in the lush, tropical climate where they receive plenty of sunlight and water, ensuring a rich, sweet flavor."
    },
    {
        title: "Harvesting",
        image: journeyImg,
        desc: "Once perfectly ripe, our expert farmers carefully handpick each mango to ensure only the best quality fruits are selected."
    },
    {
        title: "Sorting & Grading",
        image: journeyImg,
        desc: "The mangoes are sorted based on size, ripeness, and quality to ensure only premium mangoes make it to the next step."
    },
    {
        title: "Cleaning & Packaging",
        image: journeyImg,
        desc: "Each mango is thoroughly cleaned and carefully packed using eco-friendly packaging to maintain freshness and prevent damage."
    },
    {
        title: "Cold Storage",
        image: journeyImg,
        desc: "To preserve their freshness, the mangoes are stored in temperature-controlled environments before being dispatched."
    },
    {
        title: "Transportation",
        image: journeyImg,
        desc: "Our logistics team ensures that the mangoes are transported under optimal conditions, reaching their destination in perfect condition."
    },
    {
        title: "Delivery",
        image: journeyImg,
        desc: "Finally, our mangoes arrive at your doorstep, ready to be enjoyed at peak freshness and flavor!"
    }
];


const VideoSection = () => {
    return (
        <div>
            <div className='journey-container'>

                <div className='my-3 mb-5'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        Watch Mangolicious in Action
                    </h1>
                </div>

                <div className='h-100' style={{ overflow: 'hidden', borderRadius: 30}}>
                    <VideoPlayer />
                </div>

            </div>
        </div>
    )
}

export default VideoSection