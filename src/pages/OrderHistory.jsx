import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image13 from "../assets/images/image13.png";
import image14 from "../assets/images/image14.png";
import CustomButton from '../components/CustomButton';
import logoutImg from "../assets/icons/logout.svg";
import Scrollbar from 'react-scrollbars-custom';
import CustomInput from '../components/CustomInput';
import snendImg from "../assets/icons/send.svg";
import { CircularProgress } from '@mui/material';
import { useUserdata } from '../context/UserContext';
import { orderHistory } from '../global/allApis';
import { Autorenew, CalendarMonthOutlined, LocationOn, Map } from '@mui/icons-material';

const tabs = [
    {
        link: "/profile",
        label: "Profile Details"
    },
    {
        link: "/orders",
        label: "Orders"
    },
    {
        link: "/order-history",
        label: "Order History"
    },
]

const OrderHistory = () => {

    const navigate = useNavigate();

    const [data, setdata] = useState([]);

    const { userData, getUserData, updateUserData } = useUserdata();

    useEffect(() => {
        getUserData();
    }, [])

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }
    }, [])

    const location = useLocation();

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

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userid")
        navigate("/login")
    }

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    const getData = async () => {
        const response = await orderHistory();
        console.log({ response })
        if (response.orders) {
            setdata(response.orders)
        } else {
            setdata([])
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Navbar />

            {
                loading ?
                    <div style={{ marginTop: 50 }} className='d-flex h-100 justify-content-center align-items-center profile-page-container profile-page-container-scrollbar'>
                        <CircularProgress size={22} thickness={4} style={{ color: "#DC752A" }} />
                    </div>
                    :
                    <div className='profile-page-container'>

                        <div className='profile-sidebar-container'>

                            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                                <div>
                                    <img
                                        src={image13}
                                        style={{ maxWidth: "130px" }}
                                        className='py-4'
                                    />
                                </div>
                                <h4 className='yeseva text-dark mb-2'>{userData.fullname}</h4>

                                <p className='text-secondary opensans fs-6'>{userData.mobile_no}</p>
                            </div>

                            <div className='d-flex gap-2 flex-column py-4' style={{ flex: 1 }}>
                                {
                                    tabs.map((item) => (
                                        <Link to={item.link}>
                                            <div className={item.link == location.pathname ? "active-profile-single-menu-option profile-single-menu-option opensans" : 'profile-single-menu-option opensans'}>
                                                <p style={{ fontSize: 14 }}>{item.label}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>

                            <CustomButton label={"Logout"} icon={logoutImg} onClick={handleLogout} />

                        </div>


                        <Scrollbar className='profile-page-container-scrollbar' >
                            <div className='profile-content-container'>
                                <div>
                                    <h4 className='yeseva text-dark mb-2'>Order History</h4>
                                </div>
                                {
                                    data.map((item, index) => (
                                        <div key={index} className='d-flex flex-wrap gap-3 align-items-start'>
                                            <div className='container-profile-detail-form' style={{ flex: 1 }}>

                                                <div className='d-flex flex-column gap-4' >


                                                    {
                                                        item.items.map((subItem, subIndex) => (

                                                            <div key={subIndex} className='d-flex gap-3'>
                                                                <div className='d-flex' style={{ borderRadius: 15, border: '1px solid lightgray', height: 50, minWidth: 50, overflow: "hidden" }}>
                                                                    <img
                                                                        src={image14}
                                                                        style={{ height: "50px", width: "50px" }}
                                                                    />
                                                                </div>

                                                                <div className='d-flex justify-content-between w-100'>
                                                                    <div className='d-flex flex-column'>
                                                                        <h5 className='yeseva text-dark mb-2'>{subItem.name || "Kesar Mangoes"}</h5>

                                                                        <p style={{ fontSize: 12 }} className='text-secondary'>
                                                                            {subItem.quantity || 3} Boxes
                                                                        </p>
                                                                    </div>
                                                                    <div className='d-flex flex-column align-items-end'>
                                                                        <h4 className='yeseva text-dark mb-2'>₹ {subItem.price || 1400}</h4>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        ))
                                                    }

                                                    <div className='d-flex flex-column gap-1 ps-1'>
                                                        {
                                                            item.status == "pending" &&
                                                            <p style={{ fontSize: 12 }} className='text-warning'>
                                                                <Autorenew style={{ fontSize: 16 }} /> &nbsp; {item.status}
                                                            </p>
                                                        }
                                                        {
                                                            item.status == "approved" &&
                                                            <p style={{ fontSize: 12 }} className='text-success'>
                                                                <Autorenew style={{ fontSize: 16 }} /> &nbsp; {item.status}
                                                            </p>
                                                        }
                                                        <p style={{ fontSize: 12 }} className='text-secondary'>
                                                            <CalendarMonthOutlined style={{ fontSize: 16 }} /> &nbsp; {item.ordered_at}
                                                        </p>
                                                        <p style={{ fontSize: 12 }} className='text-secondary'>
                                                            <LocationOn style={{ fontSize: 16 }} /> &nbsp; {item.address}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </Scrollbar>

                    </div>
            }
        </div>
    )
}

export default OrderHistory