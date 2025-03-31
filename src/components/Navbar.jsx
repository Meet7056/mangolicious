import React from 'react'
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import CustomButton from './CustomButton';
import bag from "../assets/icons/bag.svg";
import userImg from "../assets/icons/user.svg";
import CustomizedMenus from './PopupMenu';

const links = [
  { link: "/", name: "HOME" },
  { link: "/about", name: "ABOUT" },
  { link: "/menu", name: "MENU" },
  { link: "/contact", name: "CONTACT US" },
]

const Navbar = () => {

  const location = useLocation();

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
      <div className='d-flex gap-4 px-3'>
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
        <CustomButton label="ORDER NOW" icon={bag} />
        <CustomizedMenus icon={userImg} />
      </div>

    </div>
  )
}

export default Navbar