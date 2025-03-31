import React from 'react'
import CustomButton from '../components/CustomButton';
import cartImg from "../assets/icons/cart.svg";
import { Grid } from '@mui/material';
import image3 from "../assets/images/image3.png";
import image5 from "../assets/images/image5.png";

const Specialities = () => {
    return (
        <div>
            <div className='products-container' style={{ padding: "50px 20px 0px 20px" }}>

                <div className='my-3'>
                    <h1 className='yeseva text-center' style={{ fontSize: "40px", color: "#DC752A" }}>
                        Why Choose Mangolicious?
                    </h1>
                </div>

                <div className='products-items-container'>
                    <img
                        style={{ width: "100%" }}
                        src={image5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Specialities