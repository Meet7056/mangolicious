import React from "react";

const CustomTextarea = ({
    label,
    value,
    onChange,
    placeholder = "Enter text...",
    type = "text",
    icon = null,
    fullWidth = true,
    name
}) => {
    return (
        <div className="custom-input-container">
            <div className="custom-input-wrapper">
                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="custom-input opensans"
                    style={{ width: fullWidth ? "100%" : "auto" }}
                    name={name}
                />
            </div>
        </div>
    );
};

export default CustomTextarea;
