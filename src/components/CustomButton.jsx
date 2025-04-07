import React from 'react';
import bag from "../assets/icons/bag.svg";
import CircularProgress from '@mui/material/CircularProgress';

const CustomButton = ({
    label,
    icon,
    loading = false,
    ...rest
}) => {
    return (
        <div
            {...rest}
            className='custom-button'
            role='button'
            style={{
                width: !label ? 40 : undefined,
                padding: !label ? 0 : undefined,
                opacity: loading ? 0.6 : 1,
                pointerEvents: loading ? "none" : "auto", // optional: disable click during loading
            }}
        >
            {label && <p>{label || "ORDER NOW"}</p>}

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 20 }}>
                {
                    loading
                        ? <CircularProgress size={18} thickness={4} style={{ color: "#fff" }} />
                        : <img src={icon || bag} style={{ maxHeight: 18 }} />
                }
            </div>
        </div>
    );
};

export default CustomButton;
