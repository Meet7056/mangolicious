import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image13 from "../assets/images/image13.png";
import CustomButton from '../components/CustomButton';
import logoutImg from "../assets/icons/logout.svg";
import Scrollbar from 'react-scrollbars-custom';
import CustomInput from '../components/CustomInput';
import snendImg from "../assets/icons/send.svg";
import { CircularProgress } from '@mui/material';
import { useUserdata } from '../context/UserContext';
import { updateProfile } from '../global/allApis';

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

const Login = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }
    }, [])

    const location = useLocation();

    const { userData, getUserData, updateUserData } = useUserdata();

    useEffect(() => {
        getUserData();
    }, [])

    const [formData, setFormData] = useState({
        message: "",
        name: "",
        email: "",
    });

    useEffect(() => {
        setFormData(userData)
    }, [userData])


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

    const handleSubmit = () => {
        updateUserData(formData);
    }

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
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

                            <CustomButton label={"Logout"} onClick={handleLogout} icon={logoutImg} />

                        </div>


                        <Scrollbar className='profile-page-container-scrollbar' >

                            <div className='profile-content-container'>
                                <div>
                                    <h4 className='yeseva text-dark mb-2'>{formData.fullname}</h4>
                                </div>
                                <div className='d-flex flex-wrap gap-3 align-items-start'>
                                    <div className='container-profile-detail-form' style={{ flex: 1, maxWidth: 300 }}>
                                        <div className='d-flex flex-column gap-3' >
                                            <div className='d-flex justify-content-center py-2 w-100'>
                                                <img
                                                    src={image13}
                                                    style={{ maxWidth: "130px" }}
                                                    className='py-0'
                                                />
                                            </div>
                                            <CustomInput
                                                label="Your Username"
                                                name="fullname"
                                                value={formData.fullname}
                                                onChange={handleInputChange}
                                                type="text"
                                                placeholder="Enter Username"
                                                inputBgColor={"#eee9df"}
                                            />
                                            <CustomInput
                                                label="Your Phone"
                                                name="mobile_no"
                                                value={formData.mobile_no}
                                                onChange={handleInputChange}
                                                type="number"
                                                placeholder="Enter phone number"
                                                inputBgColor={"#eee9df"}
                                            />
                                            <CustomInput
                                                label="Your Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                type="text"
                                                placeholder="Enter email address"
                                                inputBgColor={"#eee9df"}
                                            />

                                            <div className="d-flex mt-3 justify-content-center">
                                                <CustomButton label={"EDIT"} role="button" type={'submit'} onClick={handleSubmit} icon={snendImg} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='container-change-password-form' style={{ flex: 2 }}>
                                        <div className='d-flex flex-column gap-3' >
                                            <h5 className='yeseva text-dark mb-2'>Change Password</h5>
                                            <CustomInput
                                                label="Enter Password"
                                                name="old_password"
                                                value={formData.old_password}
                                                onChange={handleInputChange}
                                                type="password"
                                                placeholder="Enter old password"
                                                inputBgColor={"#eee9df"}
                                            />
                                            <CustomInput
                                                label="Your Password"
                                                name="new_password"
                                                value={formData.new_password}
                                                onChange={handleInputChange}
                                                type="password"
                                                placeholder="Enter new password"
                                                inputBgColor={"#eee9df"}
                                            />
                                            <CustomInput
                                                label="Your Password"
                                                name="confirm_password"
                                                value={formData.confirm_password}
                                                onChange={handleInputChange}
                                                type="password"
                                                placeholder="Enter confirm password"
                                                inputBgColor={"#eee9df"}
                                            />
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                        </Scrollbar>

                    </div>
            }
        </div>
    )
}

export default Login