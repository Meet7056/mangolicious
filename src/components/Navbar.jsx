import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import CustomButton from './CustomButton';
import bag from "../assets/icons/bag.svg";
import userImg from "../assets/icons/user.svg";
import locationImg from "../assets/icons/location.svg";
import CustomizedMenus from './PopupMenu';
import Sidebar from './Sidebar';
import Badge from '@mui/material/Badge';
import { useProducts } from '../context/ProductContext';
import PopupModal from './PopupModal';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const indianStates = {
  AndhraPradesh: ['Visakhapatnam', 'Vijayawada', 'Guntur'],
  ArunachalPradesh: ['Itanagar', 'Tawang', 'Ziro'],
  Assam: ['Guwahati', 'Dibrugarh', 'Silchar'],
  Bihar: ['Patna', 'Gaya', 'Bhagalpur'],
  Chhattisgarh: ['Raipur', 'Bilaspur', 'Durg'],
  Goa: ['Panaji', 'Margao', 'Vasco da Gama'],
  Gujarat: ['Ahmedabad', 'Bhavnagar', 'Surat', 'Vadodara', 'Rajkot'],
  Haryana: ['Gurugram', 'Faridabad', 'Panipat'],
  HimachalPradesh: ['Shimla', 'Manali', 'Dharamshala'],
  Jharkhand: ['Ranchi', 'Jamshedpur', 'Dhanbad'],
  Karnataka: ['Bengaluru', 'Mysuru', 'Mangalore'],
  Kerala: ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
  MadhyaPradesh: ['Bhopal', 'Indore', 'Jabalpur'],
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  Manipur: ['Imphal'],
  Meghalaya: ['Shillong'],
  Mizoram: ['Aizawl'],
  Nagaland: ['Kohima', 'Dimapur'],
  Odisha: ['Bhubaneswar', 'Cuttack', 'Rourkela'],
  Punjab: ['Ludhiana', 'Amritsar', 'Jalandhar'],
  Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota'],
  Sikkim: ['Gangtok'],
  TamilNadu: ['Chennai', 'Coimbatore', 'Madurai'],
  Telangana: ['Hyderabad', 'Warangal', 'Nizamabad'],
  Tripura: ['Agartala'],
  UttarPradesh: ['Lucknow', 'Kanpur', 'Varanasi', 'Agra', 'Noida'],
  Uttarakhand: ['Dehradun', 'Haridwar', 'Nainital'],
  WestBengal: ['Kolkata', 'Siliguri', 'Durgapur'],
  Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  JammuAndKashmir: ['Srinagar', 'Jammu', 'Anantnag'],
  Ladakh: ['Leh', 'Kargil']
};


const links = [
  { link: "/", name: "HOME" },
  { link: "/about", name: "ABOUT" },
  { link: "/menu", name: "MENU" },
  { link: "/contact", name: "CONTACT US" },
]

const PopupComponent = ({ formData, handleSubmit, loading }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Update parent formData when dropdown values change
    handleInputChange({ target: { name: 'state', value: selectedState } });
    handleInputChange({ target: { name: 'city', value: selectedCity } });
  }, [selectedState, selectedCity]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData[name] = value;
  };

  return (
    <div className="d-flex align-items-center flex-wrap justify-content-around w-100">
      <div style={{ minWidth: 340 }} className="d-flex flex-column gap-3 p-3 my-5">
        <CustomSelect
          label="Select State"
          name="state"
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedCity('');
          }}
          options={Object.keys(indianStates)}
          placeholder="Choose State"
        />

        <CustomSelect
          label="Select City"
          name="city"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          options={selectedState ? indianStates[selectedState] : []}
          placeholder="Choose City"
          disabled={!selectedState}
        />

        <div className="d-flex justify-content-center mt-4">
          <CustomButton loading={loading} icon={bag} onClick={handleSubmit} label="Select City" />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ openModel, setopenModel, getProductsData }) => {

  const location = useLocation();
  const [open, setopen] = useState(false);
  const [loading, setLoading] = useState(true)
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [openOnce, setopenOnce] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("city")) {
      setopen(true)
    }
  }, [])

  useEffect(() => {
    if (openOnce) {
      setopen(true)
    }
    setopenOnce(true)
  }, [openModel])

  const { addProduct, removeProduct, products, getData } = useProducts();

  useEffect(() => {
    getData()
  }, [])

  const [formData, setFormData] = useState({
    customer_name: "",
    phone_number: "",
    address: "",
  });


  const handleSubmit = async () => {
    localStorage.setItem("city", formData.city);
    setopen(false)
    getProductsData();
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        <div className='window-screen-navbar-buttons'>
          <CustomButton icon={locationImg} onClick={() => { setopen(true) }} />
        </div>
        <div className='mobile-screen-navbar-buttons'>
          <CustomButton icon={locationImg} onClick={() => { setopen(true) }} />
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

      <PopupModal
        open={open}
        handleClose={() => { setopen(false);  }}
        title="Select Location"
        maxWidth='400px'
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

    </div>
  )
}

export default Navbar