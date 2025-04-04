import React from 'react'
import CustomButton from './CustomButton'
import { Email, Favorite, HeartBroken, LocationOn, Phone } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import image6 from "../assets/images/image6.png"
import image7 from "../assets/images/image7.png"

const allSections = [
    {
        title: "MANGOLICIOUS",
        subsection: [
            {
                icon: <Favorite style={{ fontSize: 20, color:"red" }} />,
                label: "This website is built, to provide you most perfect mango services!"
            },
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
    },
    {
        title: "HOME",
        subsection: [
            {
                label: "Our Mango Varieties",
                link: "/home#page-2",
            },
            {
                label: "The Mango Journey",
                link: "/home#page-3",
            },
            {
                label: "Read Our Reviews",
                link: "/home#page-4",
            },
            {
                label: "Watch Mangolicious In Action",
                link: "/home#page-5",
            },
            {
                label: "Mangolicious Speciality",
                link: "/home#page-6",
            },
        ]
    },
    {
        title: "ABOUT",
        subsection: [
            {
                label: "The Mangolicious Journey",
                link: "/about#page-2",
            },
            {
                label: "Mangolicious Specialities",
                link: "/about#page-3",
            },
            {
                label: "Location",
                link: "/about#page-4",
            },
        ]
    },
    {
        title: "MENU",
        subsection: [
            {
                label: "Our Mango Varieties",
                link: "/menu#page-2",
            },
            {
                label: "Mangolicious Videos",
                link: "/menu#page-3",
            },
        ]
    },
]

const Footer = () => {



    const navigate = useNavigate();

    const handleScroll = (event, link) => {
        event.preventDefault(); // Prevent default anchor behavior
        navigate(link); // Navigate to the page with the hash
    };


    return (
        <div className='footer-container'>


            <div style={{ position: "absolute", top: 50, left: -50 }}>
                <img
                    src={image6}
                    style={{ maxWidth: 120 }}
                />
            </div>

            <div style={{ position: "absolute", top: 200, right: -40 }}>
                <img
                    src={image6}
                    style={{ maxWidth: 120 }}
                />
            </div>

            <div className='footer-slogan mt-3'>
                <p>
                    "એક ખાસ સ્વાદ, એક ખાસ અનુભવ!"
                </p>
            </div>

            <div className='d-flex justify-content-center mb-3'>
                <CustomButton label={"ORDER NOW"} />
            </div>

            <div className='d-flex flex-wrap justify-content-between gap-3 pt-5 pb-3 mt-3' style={{ borderTop: "1px solid rgb(238 164 110)" }}>
                {
                    allSections.map((item) => (
                        <div className='d-flex flex-column gap-3 mb-5' style={{maxWidth: 400}}>
                            <h4 style={{ color: "#DC752A" }} className='mb-3'>{item.title}</h4>
                            {
                                item.subsection.map((subItem) => (
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
                    ))
                }
            </div>

        </div>
    )
}

export default Footer