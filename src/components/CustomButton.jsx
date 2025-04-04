import React from 'react'
import bag from "../assets/icons/bag.svg"

const CustomButton = ({
    label,
    icon,
    ...rest
}) => {
    return (
        <div {...rest} className='custom-button' role='button' style={{ width: !label && 40, padding: !label && 0 }}>
            {
                label &&
                <p>{label || "ORDER NOW"}</p>
            }
            <div>
                <img
                    src={icon || bag}
                    style={{ maxHeight: 18 }}
                />
            </div>
        </div>
    )
}

export default CustomButton