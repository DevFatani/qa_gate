import React from 'react'

const CustomCheckbox = ({title, value, onClick}) =>  (
    <label className="label cursor-pointer">
        <span className="label-text">{title}</span> 
        <input type="checkbox" onClick={onClick} value={value} className="checkbox" />
  </label>
);

export default CustomCheckbox;