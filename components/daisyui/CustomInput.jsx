import React from 'react'

const CustomInput = ({label, placeholder, type, require, value, onChange}) =>  (
    <div>
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className="input input-bordered w-full max-w-xs"
            required
            value={value}
            onChange={onChange}
        />
    </div>
);

export default CustomInput