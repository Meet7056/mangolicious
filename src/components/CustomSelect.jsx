import React from "react";

const CustomSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select...",
  name,
  fullWidth = true,
  disabled = false,
}) => {
  return (
    <div className="custom-input-container">
      {label && <label className="custom-label">{label}</label>}
      <div className="custom-input-wrapper">
        <select
          className="custom-input opensans"
          value={value}
          onChange={onChange}
          name={name}
          style={{ width: fullWidth ? "100%" : "auto" }}
          disabled={disabled}
        >
          <option value="">{placeholder}</option>
          {options.map((item, index) => (
            <option key={index} value={item.value || item}>
              {item.label || item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
