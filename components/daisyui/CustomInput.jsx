import React from 'react'

const CustomInput = ({label, placeholder, type, require, value, onChange, min, size = 'max-w-xs'}) =>  (
    <div>
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className={`input input-bordered w-full ${size}`}
            required
            value={value}
            onChange={onChange}
            min={min}
        />
    </div>
);

export default CustomInput