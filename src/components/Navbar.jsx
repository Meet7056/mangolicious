import React from 'react'
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import CustomButton from './CustomButton';
import bag from "../assets/icons/bag.svg";
import userImg from "../assets/icons/user.svg";
import CustomizedMenus from './PopupMenu';
import Sidebar from './Sidebar';
import Badge from '@mui/material/Badge';
import { useProducts } from '../context/ProductContext';

const links = [
  { link: "/", name: "HOME" },
  { link: "/about", name: "ABOUT" },
  { link: "/menu", name: "MENU" },
  { link: "/contact", name: "CONTACT US" },
]

const Navbar = () => {

  const location = useLocation();

  const { addProduct, removeProduct, products } = useProducts();

  return (
    <div className='d-flex justify-content-between align-items-center k p-3' style={{ backgroundColor: "#EBD6AA", zIndex: 99 }}>

      {/* logo */}
      <div>
        <img
          src={logo}
          style={{ maxHeight: 40 }}
        />
      </div>

      {/* tabs */}
      <div className='gap-4 px-3 navbar-tabs-container'>
        {
          links.map((item) => (
            <Link to={item.link} key={item.link}>
              <div>
                <p className={`nav-link ubuntu ${item.link == location.pathname && "nav-link-active"}`}>{item.name}</p>
              </div>
            </Link>
          ))
        }
      </div>

      {/* button */}
      <div className='d-flex gap-2'>
        <Link to={"/orders"}>
          <div className='window-screen-navbar-buttons'>
            <Badge
              badgeContent={products.length}
              color="error"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#fff",
                  color: "#EEA46E",
                },
              }}
            >
              <CustomButton label="ORDER NOW" icon={bag} />
            </Badge>
          </div>
        </Link>
        <div className='window-screen-navbar-buttons'>
          <CustomizedMenus icon={userImg} />
        </div>


        <Link to={"/orders"}>
          <div className='mobile-screen-navbar-buttons'>
            <Badge
              badgeContent={products.length}
              color="error"
              overlap="circular"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#fff",
                  color: "#EEA46E",
                },
              }}
            >
              <CustomButton icon={bag} />
            </Badge>
          </div>
        </Link>
        <div className='mobile-screen-navbar-buttons'>
          <Sidebar />
        </div>
      </div>

    </div>
  )
}

export default Navbar