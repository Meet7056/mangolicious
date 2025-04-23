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
import { Add, Remove } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { getOrders, placeOrder } from '../global/allApis';
import { useProducts } from '../context/ProductContext';
import bag from "../assets/icons/bag.svg";
import rightarrow from "../assets/icons/rightarrow.svg";
import PopupModal from '../components/PopupModal';
import toast from 'react-hot-toast';
import { useUserdata } from '../context/UserContext';


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

const PopupComponent = ({ formData, handleSubmit, handleInputChange, loading }) => {

    return (
        <div className='d-flex align-items-center flex-wrap justify-content-around w-100'>

            <div style={{ minWidth: 340 }} className='d-flex flex-column gap-3 p-3 my-5' >
                <CustomInput
                    label="Customer name"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    inputBgColor={"#eee9df"}
                />
                <CustomInput
                    label="Your Number"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    placeholder="Enter Mobile no."
                    inputBgColor={"#eee9df"}
                />
                <CustomInput
                    label="Your address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter Address"
                    inputBgColor={"#eee9df"}
                />

                <div className='d-flex justify-content-center mt-4'>
                    <CustomButton loading={loading} icon={bag} onClick={handleSubmit} label="ORDER NOW" />
                </div>
            </div>

            <div className='py-5'>
                <img
                    src={"https://res.cloudinary.com/dvazdgyjw/image/upload/v1745259830/Mangolicious/hxgmnz3lisszbzpezmrc.jpg"}
                    style={{ minWidth: 300, maxWidth: 300 }}
                />
            </div>

        </div>
    )
}

const InvoiceBill = ({ formData, handleSubmit, handleInputChange, loading, products, totalPrice }) => {

    console.log({ products })

    return (
        <div className='d-flex align-items-center flex-wrap justify-content-around w-100'>

            <div style={{ minWidth: 340 }} className='d-flex flex-column gap-3 p-3 my-5' >

                {
                    products.map((item, index) => (
                        <div className='pb-3 d-flex justify-content-between align-items-center border-bottom'>
                            <h6 className='text-secondary'>{item.mango_type}</h6>
                            <h5>₹ {item.price} <span style={{ fontSize: 14 }}>x {item.quantity}</span></h5>
                        </div>
                    ))
                }

                <div className='pb-3 d-flex justify-content-between align-items-center border-bottom'>
                    <h6 className='text-secondary'>Total price</h6>
                    <h5>₹ {totalPrice} </h5>
                </div>


                <div className='d-flex justify-content-center mt-4'>
                    <CustomButton loading={loading} icon={rightarrow} onClick={handleSubmit} label="NEXT" />
                </div>
            </div>

            <div className='py-5'>
                <img
                    src={"https://res.cloudinary.com/dvazdgyjw/image/upload/v1745259830/Mangolicious/hxgmnz3lisszbzpezmrc.jpg"}
                    style={{ minWidth: 300, maxWidth: 300 }}
                />
            </div>

        </div>
    )
}

const Orders = () => {

    const navigate = useNavigate();
    const { addProduct, removeProduct, products, decreaseQuantity, increaseQuantity, getData, totalPrice } = useProducts();
    const { userData, getUserData, updateUserData } = useUserdata();

    const location = useLocation();

    const [loading, setLoading] = useState(true)
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [value, setvalue] = useState(0);

    const handleLogout = () => {
        localStorage.removeItem("userid")
        localStorage.removeItem("token")
        navigate("/login")
    }

    const handleSubmit = async () => {
        if (!formData.customer_name || !formData.phone_number || !formData.address) {
            toast.error("Please fill all required fields");
            return;
        }

        setLoadingBtn(true)
        const response = await placeOrder(formData);
        if (response.message == "Order placed successfully") {
            toast.success("Order placed successfully!")
            setopen(false);
            getData();
            setvalue(0)
        } else {
            toast.error(response.message || "Request failed")
        }
        setLoadingBtn(false)
    }

    const [open, setopen] = useState(false);

    const [formData, setFormData] = useState({
        customer_name: userData.fullname,
        phone_number: userData.mobile_no,
        address: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        // getData();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);


    useEffect(() => {
        getUserData();
        getData();
    }, [open])

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login")
        }
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
                                    <h4 className='yeseva text-dark mb-2'>Your Orders</h4>
                                </div>
                                {
                                    products.map((item, index) => (
                                        <div key={index} className='d-flex flex-wrap gap-3 align-items-start'>
                                            <div className='container-profile-detail-form' style={{ flex: 1 }}>
                                                <div className='d-flex flex-column gap-3' >

                                                    <div className='d-flex gap-3'>
                                                        <div className='d-flex' style={{ borderRadius: 15, border: '1px solid lightgray', height: 50, minWidth: 50, overflow: "hidden" }}>
                                                            <img
                                                                src={image14}
                                                                style={{ height: "50px", width: "50px" }}
                                                            />
                                                        </div>

                                                        <div className='d-flex justify-content-between w-100'>
                                                            <div className='d-flex flex-column'>
                                                                <h6 className='yeseva mb-2 text-secondary'>{item.mango_type}</h6>

                                                                <h5 className='yeseva text-dark mb-2'>₹ {item.price}</h5>
                                                            </div>
                                                            <div className='d-flex flex-column align-items-end justify-content-between'>

                                                                <p style={{ fontSize: 14 }} className='text-secondary'>
                                                                    {item.quantity} Boxes
                                                                </p>

                                                                <div className='d-flex gap-2'>
                                                                    <div className='small-profile-button'
                                                                        onClick={() => {
                                                                            increaseQuantity(item.id)
                                                                        }}
                                                                    >
                                                                        <Add style={{ fontSize: 16 }} />
                                                                    </div>
                                                                    <div className='small-profile-button'
                                                                        onClick={() => {
                                                                            decreaseQuantity(item.id)
                                                                        }}
                                                                    >
                                                                        <Remove style={{ fontSize: 16 }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    products.length == 0 &&
                                    <div className='d-flex justify-content-center text-secondary'>
                                        <h4>Orders not found!</h4>
                                    </div>
                                }


                                {
                                    products.length > 0 &&
                                    <div className='d-flex justify-content-center mt-3'>
                                        <CustomButton icon={bag} label="ORDER NOW" onClick={() => { setopen(true); setvalue(1); }} />
                                    </div>
                                }

                            </div>

                        </Scrollbar>

                        {
                            value == 1 ?
                                <PopupModal
                                    open={open}
                                    handleClose={() => { setopen(false) }}
                                    title="Invoice Bill"
                                    content={
                                        <InvoiceBill
                                            handleInputChange={handleInputChange}
                                            formData={formData}
                                            loading={loadingBtn}
                                            handleSubmit={() => { setvalue(2) }}
                                            products={products}
                                            totalPrice={totalPrice}
                                        />
                                    }
                                    onConfirm={handleSubmit}
                                /> :
                                <PopupModal
                                    open={open}
                                    handleClose={() => { setopen(false); setvalue(1) }}
                                    title="Place Order"
                                    content={
                                        <PopupComponent
                                            handleInputChange={handleInputChange}
                                            formData={formData}
                                            loading={loadingBtn}
                                            handleSubmit={handleSubmit}
                                        />
                                    }
                                    onConfirm={handleSubmit}
                                />
                        }

                    </div>
            }
        </div>
    )
}

export default Orders