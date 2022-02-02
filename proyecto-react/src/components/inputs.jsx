import React from 'react';

const Inputs = ({name, type, placeholder, text}) =>{
    return(
        <label htmlFor={name} className='labelForm'>
            <span>{text}</span>
            <input name={name} placeholder={placeholder} type={type}/>
        </label>
    )
}

export default Inputs;