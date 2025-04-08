import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Settings, LogOut, ShoppingCart, History, ShoppingBasket, LogIn, UserPlus } from "lucide-react";
import CustomizedMenus from "./PopupMenu";
import burgerImg from "../assets/icons/burger.svg";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const links = [
    { link: "/home", name: "Home", icon: <Home size={20} /> },
    { link: "/about", name: "About", icon: <User size={20} /> },
    { link: "/contact", name: "Contact Us", icon: <User size={20} /> },
    { link: "/menu", name: "Menu", icon: <ShoppingCart size={20} /> },
    { link: "/profile", name: "Profile", icon: <User size={20} /> },
    { link: "/order-history", name: "Order History", icon: <History size={20} /> },
    { link: "/orders", name: "Orders", icon: <ShoppingCart size={20} /> },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <CustomButton icon={burgerImg} onClick={toggleSidebar} />

            {/* Backdrop */}
            {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}

            {/* Sidebar */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="sidebar"
            >
                <button className="close-btn" onClick={toggleSidebar}>
                    <X size={25} />
                </button>

                <ul className="menu">
                    {links.map((item, index) => (
                        <Link to={item.link} onClick={() => setIsOpen(false)}>
                            <li key={index}>
                                {item.icon}
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </motion.div>
        </>
    );
};

export default Sidebar;
