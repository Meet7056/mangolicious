import React from "react";
import { Link } from "react-router-dom";

const CustomInput = ({
  label,
  value,
  onChange,
  placeholder = "Enter text...",
  type = "text",
  icon = null,
  fullWidth = true,
  name,
  link,
  notewithlink,
  inputBgColor,
  ...rest
}) => {
  return (
    <div className="custom-input-container">
      <div className="custom-input-wrapper">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`custom-input opensans`}
          style={{ width: fullWidth ? "100%" : "auto", backgroundColor: inputBgColor && inputBgColor }}
          name={name}
          {...rest}
        />

      </div>
      {
        notewithlink &&
        <Link to={link}>
          <p style={{ color: "#DC752A", fontSize: 14 }}>{notewithlink}</p>
        </Link>
      }
    </div>
  );
};

export default CustomInput;
