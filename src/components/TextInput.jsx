import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";

function TextInput({ id, type, value,placeholder, onChange, error, className }) {
    

  return (

        <div className='w-64'>
            <span className='absolute pt-7 pl-2'><FaUser /></span>
            <input
                placeholder={placeholder}
                type={type}
                id={id}
                className={className}
                value={value}
                onChange={onChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

  )
}

export default TextInput