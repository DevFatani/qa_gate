import React from 'react'

const CustomTextarea = ({label, placeholder, type, require, value, onChange, numbered, cols, rows}) =>  (
    <div>
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <textarea
        
            type={type}
            placeholder={placeholder}
            className={`textarea textarea-bordered textarea-lg w-full ${numbered ? 'numbered': ''}`}
            // className={`expandable-textarea textarea textarea-bordered textarea-lg w-full ${numbered ? 'numbered': ''}`}
            required={require}
            value={value}
            onChange={onChange}
            rows={rows}
            cols={cols}
        />
    </div>
);

export default CustomTextarea;