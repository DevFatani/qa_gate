import React from 'react'

const CustomInput = ({
    label,
    placeholder,
    type,
    require = false,
    value,
    onChange,
    min,
    size = 'max-w-xs',
    marginTop
}) =>  (
    <div
        style={{marginTop: marginTop}}
    >
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className={`input input-bordered w-full ${size}`}
            required={require}
            value={value}
            onChange={onChange}
            min={min}
        />
    </div>
);

export default CustomInput