import React from 'react'
import image12 from "../assets/images/image12.png"
import GoogleMapComponent from '../components/MapComponent'
import { Email, LocationOn, Phone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import CustomButton from '../components/CustomButton'
import rightarrow from "../assets/icons/rightarrow.svg"
import GoogleMapCustomComponent from '../components/googleMap'

const items = {
    title: "MANGOLICIOUS",
    subsection: [
        {
            icon: <Email style={{ fontSize: 20 }} />,
            label: "mangolicious@gmail.com"
        },
        {
            icon: <Phone style={{ fontSize: 20 }} />,
            label: "+91 8490803636"
        },
        {
            icon: <LocationOn style={{ fontSize: 20 }} />,
            label: "John Doe, 456 Elm Street, Suite 3, Los Angeles, CA 90001, USA"
        },
    ]
}

const FreshFarmTitle = () => {
    return (
        <div>
            <div className='journey-container py-5'>

                <div className='my-4'>
                    <h1 className='yeseva text-center' style={{ fontSize: "50px", color: "#DC752A" }}>
                        Fresh From Our Farm
                    </h1>
                </div>

                <div className='fresh-farm-content-container flex-wrap'>
                    <div className=''>
                        {/* <GoogleMapComponent /> */}
                        <GoogleMapCustomComponent />
                        {/* <img
                            src={image12}
                            style={{ maxWidth: 500, width: "100%" }}
                        /> */}
                    </div>
                    <div style={{ maxWidth: 400, justifyContent: "center", display: "flex", flexDirection: "column" }}>
                        <h3 className='yeseva mb-4' style={{ color: "#DC752A" }}>
                            Find us Here
                        </h3>
                        <div className='d-flex flex-column gap-2'>
                            {
                                items.subsection.map((subItem) => (
                                    <div className='d-flex gap-2 align-items-center'>
                                        {
                                            subItem.icon &&
                                            <div style={{ color: "#DC752A" }}>{subItem.icon}</div>
                                        }
                                        {
                                            subItem.link ?
                                                <a href={subItem.link} onClick={(e) => handleScroll(e, subItem.link)}><p className='opensans text-secondary ' style={{ fontSize: 14 }}>{subItem.label}</p></a>
                                                :
                                                <p className='opensans text-secondary ' style={{ fontSize: 14 }}>{subItem.label}</p>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="d-flex mt-5">
                            <Link to={"/contact#page-1"}>
                                <CustomButton label={"CONTACT US"} icon={rightarrow} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FreshFarmTitle